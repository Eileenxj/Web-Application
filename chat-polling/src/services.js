export const fetchUserList = ({username}) => {
    return fetch(`/allUsers?username=${username}`, {credentials: 'include'})
    .catch( err => {
        return Promise.reject({ err: 'network-issue', details: err });
    })
    .then( response => {
    if( response.ok ) {
        return response.json();
    }
    return Promise.reject({ err: 'server-error', details: response.statusCode });
    });
};

export const fetchMessageList = ({username}) => {
    return fetch(`/allMessages?username=${username}`, {credentials: 'include'})
    .catch( err => {
        return Promise.reject({ err: 'network-issue', details: err });
    })
    .then( response => {
        if( response.ok ) {
            return response.json();
        }
        return Promise.reject({ err: 'server-error', details: response.statusCode });
    });
};

export const addMessage = ({ username, timestamp, text}) => {
    return fetch(`/allMessages?username=${username}`, {
        method: 'POST',
        credentials : 'include',
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify({ username, timestamp, text}),
    })
    .catch( err => {
        return Promise.reject({ err: 'network-issue', details: err });
    })
    .then( response => {
        if( response.ok ) {
            return response.json();
        }
        return Promise.reject({ err: 'server-error', details: response.statusCode });
    });
};

export const logout = ({username}) => {
    return fetch('/logout', {
        method: 'POST',
        credentials : 'include',
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify({username}),
    })
    .catch( err => {
        return Promise.reject({ err: 'network-issue', details: err });
    })
    .then( response => {
        if( response.ok ) {
            return response.json();
        }
        return Promise.reject({ err: 'server-error', details: response.statusCode });
    });
};

export const login = ({username}) => {
    return fetch('/session', {
      method: 'POST',
      headers: new Headers({ 'content-type': 'application/json' }),
      body: JSON.stringify({ username }),
    })
    .catch( err => {
      return Promise.reject({ err: 'network-issue', details: err });
    })
    .then( response => {
      if( response.ok ) {
        return response.json();
      }
      return Promise.reject({ err: 'server-error', details: response.statusCode });
    });
  };