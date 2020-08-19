import React, { useContext } from 'react';
import TodoContext from './context/TodoContext';
import SortTodos from './SortTodos';

const FilterTodos = () => {
  const todoContext = useContext(TodoContext);

  const filterTasksByStatus = (e) => {
    todoContext.filterTasksByStatus(e.target.value);
  };

  return (
    <div className="filter">
      <span className="filter-container">
        <label className="filter-label">Filter:</label>
        <select
          className="filter-task filter-height"
          value={todoContext.taskStatusFilter}
          onChange={filterTasksByStatus}
        >
          <option value="all">All Tasks</option>
          <option value="active">Active Tasks</option>
          <option value="complete">Complete Tasks</option>
        </select>
      </span>
      <SortTodos />
    </div>
  );
};

export default FilterTodos;
