import React, { useState, useEffect, useContext } from 'react';
import TodoContext from './context/TodoContext';
import FilterTodos from './FilterTodos';
import constants from './context/Constants';

const TodoList = () => {
  const todoContext = useContext(TodoContext);
  const [task, setTodoTask] = useState('');

  useEffect(() => {
    todoContext.getAllTasks(todoContext.username);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const appendTask = (e) => {
    e.preventDefault();
    todoContext.addNewTask(todoContext.username, task);
    setTodoTask('');
  };

  const onChange = (e) => setTodoTask(e.target.value);

  const toggleTodo = (e) => {
    todoContext.toggleTodo(e.target.id);
  };

  const updateTask = (e) => {
    todoContext.updateTask(e.target.id, e.target.value);
  };

  const deleteTask = (e) => {
    todoContext.deleteTask(e.target.id);
  };

  const refreshTask = () => {
    todoContext.getAllTasks(todoContext.username);
    todoContext.refreshTasks();
  };

  return (
    <div>
      <div className="todo-container">
        <FilterTodos />
        <div className="add-todo-container">
          <input
            className="todo-input"
            onChange={onChange}
            value={task}
            type="text"
            placeholder="Enter Todo Task here"
          />
          <button className="btn-todo-add" onClick={appendTask}>
            Add Task
          </button>
          <button className="btn-refresh" onClick={refreshTask}>
            Refresh
          </button>
          <div className="todo-display">
            <ul>
              {Object.values(todoContext.tasks)
                .filter((task) =>
                  todoContext.taskStatusFilter === constants.COMPLETE
                    ? task.done === constants.TRUE
                    : constants.TRUE
                )
                .filter((task) =>
                  todoContext.taskStatusFilter === constants.ACTIVE
                    ? task.done === constants.FALSE
                    : constants.TRUE
                )
                .map((task, index) => (
                  <li key={index}>
                    <input
                      id={task.taskId}
                      className="todo-checkbox"
                      type="checkbox"
                      checked={task.done ? 'checked' : ''}
                      onChange={toggleTodo}
                    />
                    <input
                      type="text"
                      id={task.taskId}
                      className={`todo ${task.done ? 'todo complete' : 'todo'}`}
                      value={task.name}
                      onChange={updateTask}
                      contentEditable="true"
                    />

                    <button
                      id={task.taskId}
                      className="task-delete"
                      onClick={deleteTask}
                    >
                      X
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
