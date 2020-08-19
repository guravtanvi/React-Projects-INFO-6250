import React from "react";

const FinalResult = ({score, newGame}) => (
    
    <div className="final-result">
        <div className="final-score">Total Score: {score}/5 Correct Answers</div>
        <button className="play-again-button" onClick={newGame}>
            Play Again
        </button>
    </div>
);

export default FinalResult;