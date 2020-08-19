import React, { useContext } from 'react';

import TodoContext from './context/TodoContext';

const Navigation = () => {
  const todoContext = useContext(TodoContext);

  const logout = () => {
    todoContext.setLogout();
  };

  return (
    <div>
      <div className="header">MANAGE TODO LIST</div>
      <div className="error-note">{todoContext.networkError}</div>
      <ul className="nav">
        {todoContext.isLoggedIn && (
          <li className="logout action" onClick={logout}>
            Logout
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navigation;
