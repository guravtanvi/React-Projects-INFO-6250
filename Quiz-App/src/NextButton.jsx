import React from "react";

const NextButton = ({ next, isClicked }) => {
    
    return (    
        <button className="next-button"  onClick={next}
        disabled={!isClicked}
        >
        Next Question
        </button>
    );
};

export default NextButton;