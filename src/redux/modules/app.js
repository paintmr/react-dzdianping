const initialState = {
  error: null
}

export const types = {
  CLEAR_ERROR: "APPL/CLEAR_ERROR"
}

// action creators
export const actions = {
  clearError: () => ({
    type: types.CLEAR_ERROR
  })
}

const reducer = (state = initialState, action) => {
  // 修改state的判断条件，既可以是action.type，也可以是action的其它属性
  if (action.type === types.CLEAR_ERROR) {
    return { ...state, error: null }
  } else if (action.error) {
    return { ...state, error: action.error }
  }
  return state
}

export default reducer

// selector函數用於從state中獲取部分狀態
export const getError = (state) => {
  return state.app.error
}