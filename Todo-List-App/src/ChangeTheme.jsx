import React, { useEffect, useContext } from 'react';
import TodoContext from './context/TodoContext';

const ChangeTheme = () => {
  const todoContext = useContext(TodoContext);

  useEffect(() => {
    todoContext.getTheme(todoContext.username);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeTheme = (e) => {
    let val = e.target.value;
    todoContext.setTheme(todoContext.username, val);
  };
  return (
    <select className="theme" value={todoContext.theme} onChange={changeTheme}>
      <option value="dark">Dark-Theme</option>
      <option value="light">Light-Theme</option>
      <option value="cool">Cool-Theme</option>
    </select>
  );
};

export default ChangeTheme;
