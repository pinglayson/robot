import React from 'react';  

export default class Place extends React.Component{
    render(){
        return (
            <div className="button-container">
                <button 
                    onClick={this.props.handlePlace}
                    // disabled={this.props.robotSet}
                    >PLACE</button>
                <input 
                    value={this.props.X} 
                    onChange={this.props.handleChangeX}
                    type="number"
                    // readOnly={this.props.robotSet} 
                    />
                <input 
                    value={this.props.Y} 
                    onChange={this.props.handleChangeY}
                    type="text" 
                    // readOnly={this.props.robotSet} 
                    />
                <select 
                    value={this.props.direction} 
                    onChange={this.props.handleChangeFacing} 
                    // disabled={this.props.robotSet} 
                    >
                    <option value="▲">NORTH</option>
                    <option value="▼">SOUTH</option>
                    <option value="►">EAST</option>
                    <option value="◄">WEST</option>
                </select>
              </div>
        )
    }
}