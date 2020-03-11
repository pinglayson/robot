import React from 'react';

function Square(props) {
    return (
        <button key={props.index} className={"square " }>
            {props.value}
        </button>
    );
}

export default class Board extends React.Component {
    renderSquare(i) {
      return (
        <Square key={i} index={i} value={this.props.squares[i]} />
      );
    }
  
    createBoard = () => {
      let boardRow = [];
  
      for (let i = 0; i < 5; i++) {
        let square = [];
  
        for (let j = 0; j < 5; j++) {
          square.push(this.renderSquare(j + i * 5));
        }
  
        boardRow.unshift(<div key={i} className="board-row">{square}</div>);
      }
      return boardRow;
    };
  
    render() {
      return <div>{this.createBoard()}</div>;
    }
}
