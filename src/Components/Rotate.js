import React from 'react';

export default class Rotate extends React.Component {
    render(){
        return(
            <div className="button-container">
                <button value={this.props.text} onClick={this.props.handleRotate}>{this.props.text}</button>
            </div>
        )
    }
}