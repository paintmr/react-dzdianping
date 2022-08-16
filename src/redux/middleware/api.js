import { get } from "../../utils/request"

// 凡是带有FETCH_DATA标识的action，需要这个中间件来处理
export const FETCH_DATA = 'FETCH DATA'

const api = store => next => action => {
  const callAPI = action[FETCH_DATA]
  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  const { endpoint, schema, types } = callAPI
  if (typeof endpoint !== 'string') {
    throw new Error('endpoint should be a URL string')
  }
  if (!schema) {
    throw new Error('A schema is a must.')
  }
  if (!Array.isArray(types) && types.length !== 3) {
    throw new Error('types should be an array containing 3 elements')
  }
  if (!types.every(type => typeof type === 'string')) {
    throw new Error('action type should be string')
  }

  // 增强版action（可传递和FETCH_DATA同级的参数
  const actionWithData = data => {
    const finalAction = { ...action, ...data }
    delete finalAction[FETCH_DATA]
    return finalAction
  }

  const [requestType, successType, failureType] = types

  next(actionWithData({ type: requestType }))
  return fetchData(endpoint, schema).then(
    response => next(actionWithData({
      type: successType,
      response
    })),
    error => next(actionWithData({
      type: failureType,
      error: error.message || 'request failure'
    }))
  )
}

// request data
const fetchData = (endpoint, schema) => {
  return get(endpoint).then(data => {
    return normalizeData(data, schema)
  })
}

const normalizeData = (data, schema) => {
  const { id, name } = schema
  let kvObj = {}
  let ids = []
  if (Array.isArray(data)) {
    data.forEach(item => {
      kvObj[item[id]] = item
      ids.push(item[id])
    })
  } else {
    kvObj[data[id]] = data
    ids.push(data[id])
  }
  return {
    [name]: kvObj,
    ids
  }
}

export default api