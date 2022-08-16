import { get } from "../../utils/request"
import url from "../../utils/url"
import { FETCH_DATA } from "../middleware/api"
import { schema } from "./entities/products"

// action types
export const types = {
  //获取猜你喜欢请求
  FETCH_LIKES_REQUEST: "HOME/FETCH_LIKES_REQUEST",
  //获取猜你喜欢请求成功
  FETCH_LIKES_SUCCESS: "HOME/FETCH_LIKES_SUCCESS",
  //获取猜你喜欢请求失败
  FETCH_LIKES_FAILURE: "HOME/FETCH_LIKES_FAILURE"
}

// 同步的action
// const fetchLikesRequest = () => ({
//   type: types.FETCH_LIKES_REQUEST
// })

// const fetchLikesSuccess = (data) => ({
//   type: types.FETCH_LIKES_SUCCESS,
//   data
// })

// const fetchLikesFailure = (error) => ({
//   type: types.FETCH_LIKES_FAILURE,
//   error
// })

// 异步action
// export const actions = {
//   loadLikes: () => {
//     return (dispatch, getState) => {
//       dispatch(fetchLikesRequest());
//       return get(url.getProduct(0, 10)).then(
//         data => {
//           dispatch(fetchLikesSuccess(data))
//         },
//         error => {
//           dispatch(fetchLikesFailure(error))
//         }
//       )
//     }
//   }
// }

// 给请求数据类型的action打上FETCH_DATA标记，好让中间件去处理
const fetchLikes = endpoint => ({
  [FETCH_DATA]: {
    types: [
      types.FETCH_LIKES_REQUEST,
      types.FETCH_LIKES_SUCCESS,
      types.FETCH_LIKES_FAILURE
    ],
    endpoint,
    schema
  }
})

// 简化版异步action
export const actions = {
  loadLikes: () => {
    return (dispatch, getState) => {
      const endpoint = url.getProduct(0, 10)
      return dispatch(fetchLikes(endpoint))
    }
  }
}

const reducer = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_LIKES_REQUEST:
      // todo
      break
    case types.FETCH_LIKES_SUCCESS:
      // todo
      break
    case types.FETCH_LIKES_FAILURE:
      // todo
      break
    default:
      return state;
  }
}

export default reducer;