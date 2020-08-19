import React, { useState, useEffect } from 'react';
import './App.css';
import questionBank from "./questions";
import QuestionPanel from "./QuestionPanel";
import FinalResult from "./FinalResult";
import Turns from './Turns';
import Score from './Score';
import NextButton from './NextButton';
import QuizTitle from './QuizTitle';

function App() {

const [state, setAppState] = useState({
  questions: [],
  score: 0,
  turns: 0,
  isEnd: false,
  isCorrectOption: null,
  isAnswerClicked: false
});

const getQuestionsSet = () => {
  questionBank().then(question => {
    setAppState({...state,
      questions: question,
      isCorrectOption: null,
      isAnswerClicked: false
    });
  });
};

const getNewGame = () => {
  questionBank().then(question => {
    setAppState({...state,
        questions: question,
        isCorrectOption: null,
        score: 0,
        turns: 0,
        isEnd: false,
        isAnswerClicked: false 
    });
  });
};

const checkAnswer = (selectedAnswer, correctAnswer)  => {
  setAppState({...state,
      turns: state.turns <5 ? state.turns+1 : 5,
      score: (selectedAnswer===correctAnswer) ? state.score+1 : state.score,
      isCorrectOption: (selectedAnswer!==correctAnswer) ? false : true,
      isAnswerClicked: true
  });
};

useEffect(() => {
    getQuestionsSet({}); 
}, [])

return (
    <div className= "app">
      <QuizTitle/>

      {state.turns < 5 ? ( 
        <Turns turn={state.turns}/>
      ): null}

      {state.turns < 5 ? (
        <Score score={state.score}/>
      ): null}
      

      {state.questions.length>0 && 
      state.turns<5 &&
      state.questions.map(
      ({question, answers, correct, id}) => (
      <QuestionPanel question={question} 
         options={answers}
         key={id}
         selected= {answer =>
         checkAnswer(answer, correct)}
         isCorrect={state.isCorrectOption}
         isAnswerClicked={state.isAnswerClicked}
      />
      ))}

      { state.turns < 5 ? (  
        <NextButton next={getQuestionsSet} isClicked={state.isAnswerClicked}/> 
      ) : null}
            
      {state.turns === 5 ? (
        <FinalResult score={state.score} newGame={getNewGame} />
      ) : null}
      </div>  
    );
}

export default App;
