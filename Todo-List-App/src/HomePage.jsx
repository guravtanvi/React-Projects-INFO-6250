import React, { useContext, useEffect, Fragment } from 'react';
import TodoContext from './context/TodoContext';
import ChangeTheme from './ChangeTheme';
import TodoList from './TodoList';
import LoginPage from './LoginPage';

const HomePage = () => {
  const todoContext = useContext(TodoContext);

  useEffect(
    () => {
      todoContext.getLoginStatus();
      
    },// eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  let container;

  if (todoContext.isLoggedIn) {
    container = (
      <Fragment>
        <div className="welcome-note">
          Welcome, {todoContext.username.toUpperCase()}!!   Pick Your Theme:
          <ChangeTheme />
        </div>
        <p className="error-note">{todoContext.error}</p>
        <TodoList />
      </Fragment>
    );
  } else {
    container = <LoginPage />;
  }
  return <div>{container}</div>;
};

export default HomePage;
