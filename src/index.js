import React from "react";
import ReactDOM from "react-dom";

import Board from "./Components/Board";
import Place from "./Components/Place";
import Move from "./Components/Move";
import Rotate from "./Components/Rotate";

import "./index.css";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(25).fill(null),
      X: 0,
      Y: 0,
      direction: "►",
      robotSet: false,
      log: ""
    };
    this.handleChangeX = this.handleChangeX.bind(this);
    this.handleChangeY = this.handleChangeY.bind(this);
    this.handleChangeFacing = this.handleChangeFacing.bind(this);

    this.handlePlace = this.handlePlace.bind(this);
    this.handleMove = this.handleMove.bind(this);
    this.handleRotate = this.handleRotate.bind(this);
    this.handleReport = this.handleReport.bind(this);
  }

  directionMaping = { "►": "EAST", "▲": "NORTH", "▼": "SOUTH", "◄": "WEST" }; 

  handleChangeX(event) {
    this.setState({ X: event.target.value });
  }
  handleChangeY(event) {
    this.setState({ Y: event.target.value });
  }
  handleChangeFacing(event) {
    this.setState({ direction: event.target.value });
  }

  handlePlace() {
    if (!this.state.robotSet) {
      if (this.placeRobot()) {
        this.setState({ robotSet: true });
      }
    } else {
      this.setState({ log: "Robot is already set" });
    }
  }
  handleMove() {
    if (!this.state.robotSet) {
      return false;
    }
    let newX;
    let newY;
    switch (this.state.direction) {
      case "►":
        if ((newX = parseInt(this.state.X) + 1) < 5) {
          this.setState({ X: newX }, () => { this.moveRobot() });
        } else {
          this.setState({ log: "I am not jumping over" });
        } break;
      case "▲":
          if ((newY = parseInt(this.state.Y) + 1) < 5) {
            this.setState({ Y: newY }, () => { this.moveRobot() });
          } else {
            this.setState({ log: "Does not compute" });
          } break;
      case "▼":
          if ((newY = parseInt(this.state.Y) - 1) >= 0) {
            this.setState({ Y: newY }, () => { this.moveRobot() });
          } else {
            this.setState({ log: "I am not that type of robot" });
          } break;
      case "◄":
          if ((newX = parseInt(this.state.X) - 1) >= 0) {
            this.setState({ X: newX }, () => { this.moveRobot() });
          } else {
            this.setState({ log: "I want to live" });
          } break;
        default:
    }
  }
  handleRotate(event){
    if (!this.state.robotSet) {
      return false;
    }
    if(event.target.value==="LEFT"){
      switch(this.state.direction){
        case "►": this.setState({ direction: "▲" },() => {this.moveRobot() });break;
        case "▲": this.setState({ direction: "◄" },() => {this.moveRobot() });break;
        case "◄": this.setState({ direction: "▼" },() => {this.moveRobot() });break;
        case "▼": this.setState({ direction: "►" },() => {this.moveRobot() });break;
        default:
      }
    } else if(event.target.value==="RIGHT") {
      switch(this.state.direction){
        case "►": this.setState({ direction: "▼" },() => {this.moveRobot() });break;
        case "▲": this.setState({ direction: "►" },() => {this.moveRobot() });break;
        case "◄": this.setState({ direction: "▲" },() => {this.moveRobot() });break;
        case "▼": this.setState({ direction: "◄" },() => {this.moveRobot() });break;
        default:
      }
    }
  }
  handleReport(){
    if (!this.state.robotSet) {
      return false;
    }
    this.setState(prevState => ({ log: prevState.X+","+prevState.Y+","+this.directionMaping[prevState.direction]}));
  }

  convertIndex(X, Y) {
    return parseInt(X) + parseInt(Y) * 5;
  }

  moveRobot() {
    const convertIndex = this.convertIndex(this.state.X, this.state.Y);
    const squares = Array(25).fill(null);
    squares[convertIndex] = this.state.direction;
    this.setState({ squares: squares });
  }

  placeRobot() {
    if (this.validateMove()) {
      this.moveRobot();
      return true;
    } else {
      return false;
    }
  }

  validateMove() {
    if (
      this.state.X <= 4 &&
      this.state.X >= 0 &&
      this.state.Y <= 4 &&
      this.state.Y >= 0
    ) {
      this.setState({
        log: "Robot likes where he is"
      });
      return true;
    } else {
      this.setState({
        log: "What are you trying to do with the robot, btw I'm ignoring you."
      });
      return false;
    }
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board squares={this.state.squares} />
        </div>
        <div className="game-info">
          <Place
            X={this.state.X}
            handleChangeX={this.handleChangeX}
            Y={this.state.Y}
            handleChangeY={this.handleChangeY}
            direction={this.state.direction}
            handleChangeFacing={this.handleChangeFacing}
            handlePlace={this.handlePlace}
            robotSet={this.state.robotSet}
          />
          <Move handleMove={this.handleMove} />
          <Rotate text="LEFT" handleRotate={this.handleRotate} />
          <Rotate text="RIGHT" handleRotate={this.handleRotate} />
          <div className="button-container">
            <button onClick={this.handleReport}>REPORT</button>
          </div>
          <div className="button-container">{this.state.log}</div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Game />, document.getElementById("root"));
