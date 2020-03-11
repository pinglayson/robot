import React from 'react';  

const MemoPlace = React.memo(function Place(props) {
    return (
        <div className="button-container">
            <button 
                onClick={props.handlePlace}
                >PLACE</button>
            <input 
                value={props.X} 
                onChange={props.handleChangeX}
                type="number"
                />
            <input 
                value={props.Y} 
                onChange={props.handleChangeY}
                type="text" 
                />
            <select 
                value={props.direction} 
                onChange={props.handleChangeFacing} 
                >
                <option value="▲">NORTH</option>
                <option value="▼">SOUTH</option>
                <option value="►">EAST</option>
                <option value="◄">WEST</option>
            </select>
            </div>
    )
});

export default React.memo(MemoPlace);