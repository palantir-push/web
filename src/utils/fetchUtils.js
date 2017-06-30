const handleFetchErrors = response => {
  if (response.ok) {
    return Promise.resolve(response)
  }
  return Promise.reject({status: response.status, statusText: response.statusText})
}


export const fetchJson = (url, config = {}) =>
  fetch(url, {...config})
    .then(handleFetchErrors)


export const postJson = (url, body, config = {}) =>
  fetchJson(url, {
    ...config,
    method: 'POST',
    headers: {...body.headers, 'Content-Type': 'application/json'},
    body: JSON.stringify(body)
  })


