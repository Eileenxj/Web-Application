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

export const fetchStoryList = ({username}) => {
  return fetch(`/allStories?username=${username}`, {credentials: 'include'})
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

export const addStory = ({username, newTitle, newText, newDexcription}) => {
  return fetch(`/allStories?username=${username}`, {
      method: 'POST',
      credentials : 'include',
      headers: new Headers({ 'content-type': 'application/json' }),
      body: JSON.stringify({ username, newTitle, newText, newDexcription}),
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

export const fetchStory = (id) => {
  return fetch(`/story/${id}`, {credentials: 'include'})
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

export const addLikes = (id) => {
  return fetch(`/story/${id}`, {
    method: 'POST',
    credentials : 'include',
    headers: new Headers({ 'content-type': 'application/json' }),
    body: JSON.stringify({id}),
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
}
