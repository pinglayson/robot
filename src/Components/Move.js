import React from 'react';

export default class Move extends React.Component{
    render(){
        return (
            <div className="button-container">
                <button onClick={this.props.handleMove}>MOVE</button>
            </div>
        )
    }
}