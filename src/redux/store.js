import { configureStore } from '@reduxjs/toolkit'
import rootReducer from "./modules"
import thunk from "redux-thunk"
import api from "./middleware/api"

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, api], // 把thunk放前面，这样可以先处理函数类型的action
  devTools: process.env.NODE_ENV !== 'production',
})



export default store