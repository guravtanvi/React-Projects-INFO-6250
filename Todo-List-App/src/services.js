const getNetworkError = (err) => {
    return {
        code: 'NETWORK-ERROR',
        err
    };
};

const validateResponse = (response) => {
    if (!response.ok) {
        return response.json().then((err) => Promise.reject(err));
    }
    return response.json();
}

export const fetchStatus = () => {
    return fetch('/session', {
        method: 'GET',
    })
        .catch(getNetworkError)
        .then((validateResponse))
};

export const fetchLoginPage = (username) => {
    return fetch('/session', {
        method: 'POST',
        headers: new Headers({
            'content-type': 'application/json',
        }),
        body: JSON.stringify({ username }),
    })
        .catch(getNetworkError)
        .then((validateResponse))
};

export const fetchLogoutPage = () => {
    return fetch('/session', {
        method: 'DELETE',
    })
        .catch(getNetworkError)
        .then((validateResponse))
};

export const fetchPageTheme = (username) => {
    return fetch(`/theme/${username}`, {
        method: 'GET',
    })
        .catch(getNetworkError)
        .then(validateResponse)
};

export const fetchUpdateTheme = (username, theme) => {
    return fetch(`/theme/${username}`, {
        method: 'PUT',
        headers: new Headers({
            'content-type': 'application/json',
        }),
        body: JSON.stringify({ theme }),
    })
        .catch(getNetworkError)
        .then(validateResponse)
};

export const fetchTodoList = (username) => {
    return fetch(`/tasks/${username}`, {
        method: 'GET',
    })
        .catch(getNetworkError)
        .then(validateResponse)
}

export const fetchAppendTask = (username, task) => {
    return fetch(`/tasks/${username}`, {
        method: 'POST',
        headers: new Headers({
            'content-type': 'application/json',
        }),
        body: JSON.stringify({ task })
    })
        .catch(getNetworkError)
        .then(validateResponse)
};

export const fetchRemoveTask = (username, taskId) => {
    return fetch(`/tasks/${username}/${taskId}`, {
        method: 'DELETE'
    })
        .catch(getNetworkError)
        .then(validateResponse)
}

export const fetchUpdateTask = (username, taskId, task) => {
    return fetch(`/tasks/${username}/${taskId}`, {
        method: 'PUT',
        headers: new Headers({
            'content-type': 'application/json',
        }),
        body: JSON.stringify({ task })
    })
        .catch(getNetworkError)
        .then(validateResponse)
}