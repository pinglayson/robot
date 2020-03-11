import React from "react";

const MemoMove = React.memo(function Move(props) {
  return (
    <div className="button-container">
      <button onClick={props.handleMove}>MOVE</button>
    </div>
  );
});

export default React.memo(MemoMove);