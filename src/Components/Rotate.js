import React from 'react';

const MemoRotate = React.memo(function Rotate(props) {
    return(
        <div className="button-container">
            <button value={props.text} onClick={props.handleRotate}>{props.text}</button>
        </div>
    )
});

export default React.memo(MemoRotate);