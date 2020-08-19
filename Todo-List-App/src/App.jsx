import React , { Fragment, useContext } from 'react';
import HomePage from './HomePage';
import TodoContext from './context/TodoContext';
import Navigation from './Navigation';
import './App.css';

const App = () => {

  const todoContext = useContext(TodoContext);

  return (
    <Fragment>
      <div className={`app ${todoContext.theme ? todoContext.theme : ''}`}>
        <Navigation />
        <HomePage />
      </div>
    </Fragment>
  );
}

export default App;
