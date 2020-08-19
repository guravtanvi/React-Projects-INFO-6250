import React from 'react';

function QuestionResult(props) {
    if (props.isCorrect) {
      return <p className="correct-answer">BRAVO! CORRECT ANSWER</p>;
    } else if (props.isCorrect === false) {
      return <p className="incorrect-answer">OOPS! INCORRECT ANSWER</p>;
    } else {
      return <p className="reset-answer"></p>;
    }
  }

export default QuestionResult;