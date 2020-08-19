import React, { useContext } from 'react';
import TodoContext from './context/TodoContext';

const SortTodos = () => {
  const todoContext = useContext(TodoContext);
  
  const sortByDone = (e) => {
    todoContext.sortTasksByDone(e.target.value);
  };

  const sortByOrder = (e) => {
    todoContext.sortTasksByOrder(e.target.value);
  };


  return (
    <span className="sort-container">
      <label className="task-sort-label">Sort By:</label>
      <span className="select-sort">
        <label></label>
        <select
          className="sort-alphabetically filter-height"
          value={todoContext.taskOrderFilter}
          onChange={sortByOrder}
        >
          <option value="select option" disabled>
            Select
          </option>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
        <label>Task Done/Task Not-Done</label>
        <select
          className="sort-by-status filter-height"
          value={todoContext.taskDoneFilter}
          onChange={sortByDone}
        >
          <option value="select option" disabled>
            Select
          </option>
          <option value="done">Done</option>
          <option value="notdone">Not Done</option>
        </select>
      </span>
    </span>
  );
};

export default SortTodos;
