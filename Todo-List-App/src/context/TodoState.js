import React, { useReducer } from 'react';
import TodoReducer from './TodoReducer';
import TodoContext from './TodoContext';
import messages from '../messages';
import constants from './Constants';
import {
    GET_SESSION,
    SET_SESSION,
    SET_LOGOUT,
    GET_THEME,
    SET_THEME,
    GET_TODO,
    SET_TODO,
    TOGGLE_TODO,
    UPDATE_TODO,
    DELETE_TODO,
    STATUS_FILTER,
    ORDER_FILTER,
    REFRESH_TASKS,
    REPORT_ERROR,
    DONE_FILTER,
    NETWORK_ERROR
} from './types';

import {
    fetchStatus,
    fetchLoginPage,
    fetchPageTheme,
    fetchUpdateTheme,
    fetchLogoutPage,
    fetchTodoList,
    fetchAppendTask,
    fetchRemoveTask,
    fetchUpdateTask
} from '../services';


const TodoState = (props) => {
    const initialState = {
        isLoggedIn: false,
        username: '',
        theme: '',
        tasks: {},
        taskOrderFilter: constants.SELECT,
        taskStatusFilter: constants.ALL,
        taskDoneFilter: constants.SELECT,
        error: '',
        networkError: ''
    }
    const [state, dispatch] = useReducer(TodoReducer, initialState);

    const getLoginStatus = () => {
        fetchStatus().then((userInfo) => {
            dispatch({ type: GET_SESSION, data: userInfo.data });
        })
            .catch(err => {
                dispatch({ type: NETWORK_ERROR, data: messages[err.code] });
            });
    }

    const setLoginStatus = (username) => {
        if (!username) {
            dispatch({ type: NETWORK_ERROR, data: messages.USERNAME_MANDATORY });
        } else {
            fetchLoginPage(username)
                .then(() => {
                    dispatch({ type: SET_SESSION, data: username });
                })
                .catch(err => {
                    dispatch({ type: NETWORK_ERROR, data: messages[err.code] });
                });
        }
    }

    const setLogout = () => {
        fetchLogoutPage()
            .then(() => {
                dispatch({ type: SET_LOGOUT })
            })
            .catch(err => {
                dispatch({ type: NETWORK_ERROR, data: messages[err.code] });
            });
    }

    const getTheme = (username) => {
        fetchPageTheme(username).then((themeInfo) => {
            dispatch({ type: GET_THEME, data: themeInfo.data })
        })
            .catch(err => {
                dispatch({ type: REPORT_ERROR, data: messages[err.code] });
            });
    }

    const setTheme = (username, themeVal) => {
        fetchUpdateTheme(username, themeVal).then(() => {
            dispatch({ type: SET_THEME, data: themeVal })
        })
            .catch(err => {
                dispatch({ type: REPORT_ERROR, data: messages[err.code] });
            });
    }

    const getAllTasks = (username) => {
        fetchTodoList(username).then((taskInfo) => {
            dispatch({ type: GET_TODO, data: taskInfo.data });
        })
            .catch(err => {
                dispatch({ type: REPORT_ERROR, data: messages[err.code] });
            });
    }

    const addNewTask = (username, taskName) => {
        const task = {
            name: taskName,
            done: false
        }
        if (!taskName) {
            dispatch({ type: REPORT_ERROR, data: messages.TASK_MANDATORY });
        }
        else {
            fetchAppendTask(username, task)
                .then((taskInfo) => {
                    dispatch({ type: SET_TODO, data: taskInfo.data });
                })
                .catch(err => {
                    dispatch({ type: NETWORK_ERROR, data: messages[err.message] });
                });
        }
    }

    const toggleTodo = (id) => {
        state.tasks[id].done = !state.tasks[id].done;
        const task = state.tasks[id];
        fetchUpdateTask(state.username, id, task)
            .then((taskInfo) => {
                dispatch({ type: TOGGLE_TODO, data: taskInfo.data })
            })
            .catch(err => {
                dispatch({ type: REPORT_ERROR, data: messages[err.code] });
            });
    }

    const deleteTask = (id) => {
        fetchRemoveTask(state.username, id)
            .then((task) => {
                const remove = removeTaskByKey(task.data)
                dispatch({ type: DELETE_TODO, data: remove })
            })
            .catch(err => {
                dispatch({ type: REPORT_ERROR, data: messages[err.code] });
            });
    }

    const removeTaskByKey = (task) => {
        return Object.assign(
            {},
            ...Object.entries(state.tasks)
                .filter(([k]) => k !== task.taskId)
                .map(([k, v]) => ({ [k]: v })));
    }

    const updateTask = (id, text) => {
        const task = state.tasks[id];
        state.tasks[id].name = text;
        fetchUpdateTask(state.username, id, task)
            .then((taskInfo) => {
                dispatch({ type: UPDATE_TODO, data: taskInfo.data })
            })
            .catch(err => {
                dispatch({ type: REPORT_ERROR, data: messages[err.code] });
            });
    }

    const filterTasksByStatus = (status) => {
        dispatch({ type: STATUS_FILTER, data: status })
    }

    const sortTasksByOrder = (status) => {
        let tasks = '';
        if (status === constants.ASCENDING) {
            tasks = sortTasksByAsc();
        } else if (status === constants.DESCENDING) {
            tasks = sortTasksByDesc();
        }
        state.tasks = getObjectList(tasks);
        dispatch({ type: ORDER_FILTER, data: status })
    }

    const sortTasksByAsc = () => {
        return Object.values(state.tasks).sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            }
            else if (a.name > b.name) {
                return 1;
            }
            else {
                return 0;
            }
        })
    };

    const sortTasksByDesc = () => {
        return Object.values(state.tasks).sort((a, b) => {
            if (a.name < b.name) {
                return 1;
            }
            else if (a.name > b.name) {
                return -1;
            }
            else {
                return 0;
            }
        })
    };

    const getObjectList = (list) => {
        let task = {};
        return list.reduce((obj, item) => {
            return {
                ...obj,
                [item.taskId]: item,
            };
        }, task);
    }

    const refreshTasks = () => {
        dispatch({ type: REFRESH_TASKS });
    }

    const sortTasksByDone = (status) => {
        let tasks = {};
        if (status === constants.DONE) {
            tasks = sortByDone();
        } else if (status === constants.NOTDONE) {
            tasks = sortByNotDone();
        }
        state.tasks = getObjectList(tasks);
        dispatch({ type: DONE_FILTER, data: status });
    }

    const sortByDone = () => {
        return Object.values(state.tasks).sort((a, b) => {
            if (a.done < b.done) {
                return 1;
            }
            else if (a.done > b.done) {
                return -1;
            }
            else {
                return 0;
            }
        })
    }

    const sortByNotDone = () => {
        return Object.values(state.tasks).sort((a, b) => {
            if (a.done < b.done) {
                return -1;
            }
            else if (a.done > b.done) {
                return 1;
            }
            else {
                return 0;
            }
        })
    }

    return (
        <TodoContext.Provider
            value={{
                isLoggedIn: state.isLoggedIn,
                username: state.username,
                theme: state.theme,
                tasks: state.tasks,
                taskOrderFilter: state.taskOrderFilter,
                taskStatusFilter: state.taskStatusFilter,
                taskDoneFilter: state.taskDoneFilter,
                error: state.error,
                networkError: state.networkError,
                getLoginStatus,
                setLoginStatus,
                setTheme,
                getTheme,
                setLogout,
                getAllTasks,
                addNewTask,
                toggleTodo,
                deleteTask,
                updateTask,
                filterTasksByStatus,
                sortTasksByOrder,
                refreshTasks,
                sortTasksByDone
            }}
        >
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoState;