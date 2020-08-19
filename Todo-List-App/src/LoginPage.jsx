import React, { useState, useContext } from 'react';
import TodoContext from './context/TodoContext';
import loadinglogo from './spinner.svg';


const LoginPage = () => {

  const [loading, setLoadingState] = useState(false);
  const [user, setUserState] = useState('');
  const todoContext = useContext(TodoContext);
  const setLogin = () => {
    setLoadingState(true);
    todoContext.setLoginStatus(user);
    setLoadingState(false);
  };

  return (
    <div className="login-page">
      <input
        className="user-details"
        placeholder="Enter Login Username"
        onChange={(e) => setUserState(e.target.value)}
      />
      {loading ? (
        <img alt="loadinglogo" src={loadinglogo} />
      ) : (
        <button className="login-button" onClick={setLogin}>
          Login
        </button>
      )}
    </div>
  );
};

export default LoginPage;
