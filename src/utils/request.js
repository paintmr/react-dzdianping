const headers = new Headers({
  "Accept": "application/json",
  "Content-Type": "application/json"
})

function get(url) {
  return fetch(url, {
    method: "GET",
    headers: headers
  }).then(response => {
    handleResponse(response, url)
  }).catch(err => {
    console.error(`Request failed. URL = ${url}. Message=${err}`)
    // 为了让response可以被继续调用，在异常情况下也继续返回Promise结构
    return Promise.reject({ error: { message: "Request failed." } })
  })
}

function post(url, data) {
  return fetch(url, {
    method: "POST",
    headers: headers,
    body: data
  }).then(response => {
    handleResponse(response, url)
  }).catch(err => {
    console.error(`Request failed. URL = ${url}. Message=${err}`)
    // 为了让response可以被继续调用，在异常情况下也继续返回Promise结构
    return Promise.reject({ error: { message: "Request failed." } })
  })
}

function handleResponse(response, url) {
  if (response.status === 200) {
    return response.json()
  } else {
    console.error(`Request failed. URL = ${url}`)
    // 为了让response可以被继续调用，在异常情况下也继续返回Promise结构
    return Promise.reject({ error: { message: "Request failed due to server error." } })
  }
}

export { get, post }