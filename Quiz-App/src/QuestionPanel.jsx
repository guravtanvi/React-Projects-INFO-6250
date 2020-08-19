import React, {useState} from "react";
import QuestionResult from "./QuestionResult";

const QuestionPanel = ({ question, options, selected, isCorrect, isAnswerClicked }) => {
    
    const [answers, setAnswerState] = useState(options);
    
    return (    
        <div className="questionBox">
            <div className="question">{question}</div>
            {answers.map((text, index) => (
                <button 
                key={index} className="answer-button" 
                onClick={() =>  {
                    setAnswerState([text]);
                    selected(text);
                }} 
                disabled={isAnswerClicked}>
                    {text}
                    </button>
            ))}
        <QuestionResult isCorrect={isCorrect}/>
        </div>
    );
};

export default QuestionPanel;