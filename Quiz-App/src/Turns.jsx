import React from "react";

function Turns(props) {  
    return(
    <div className= "turns">
          <span className="turn-value">Turns: {props.turn}</span>
    </div>
    )
};

export default Turns;