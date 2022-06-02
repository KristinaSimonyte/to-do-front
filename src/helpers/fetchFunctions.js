const baseUrl = process.env.REACT_APP_BASE_URL;

export async function fetchPost(endpoint, data) {
  const token = localStorage.getItem('token');
  const auth = token ? { Authorization: 'Bearer ' + token } : {};
  const res = await fetch(baseUrl + endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...auth,
    },
    body: JSON.stringify(data),
  });
  const resInJson = await res.json();
  return resInJson;
}

export async function fetchGet(endpoint, setState) {
  const token = localStorage.getItem('token');
  const res = await fetch(baseUrl + endpoint, {
    headers: { Authorization: 'Bearer ' + token },
  });
  const resInJson = await res.json();
  setState(false);
  return resInJson;
}

export async function fetchDelete(endpoint, taskId) {
  const token = localStorage.getItem('token');
  const res = await fetch(baseUrl + endpoint + taskId, {
    method: 'DELETE',
    headers: { Authorization: 'Bearer ' + token },
  });
  const resInJson = await res.json();
  return resInJson;
}
