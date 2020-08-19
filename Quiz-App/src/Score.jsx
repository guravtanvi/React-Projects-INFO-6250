import React from "react";

function Score(props) {
    return(
    <div className= "score"> 
      <span className="score-value">Total Score: {props.score}</span>
    </div>
    )
};

export default Score;