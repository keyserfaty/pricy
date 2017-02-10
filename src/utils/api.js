//* Service to handle requests
import api from '../defaults';

export const get = (path) => {
  return new Promise((resolve, reject) =>
    fetch(api.url + '/' + path, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(res => resolve({ res }))
      .catch(error => reject({ error }))
  );
};

export const post = (path, body) => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  return new Promise((resolve, reject) =>
    fetch(api.url + '/' + path, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        ...body
      })
    })
      .then(res => res.json())
      .then(res => resolve({ res }))
      .catch(error => reject({ error }))
  );
};

export const del = (path, id) => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  return new Promise((resolve, reject) =>
    fetch(api.url + '/' + path + '/' + id, {
      method: 'DELETE',
      headers
    })
      .then(res => res.json())
      .then(res => resolve({ res }))
      .catch(error => reject({ error }))
  );
};
