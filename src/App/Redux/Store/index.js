import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import combinedReducers from '../Reducers'

const middlewares = [
  thunkMiddleware,
]
const enhancers = []

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

export default function mapStore(initialState) {
  const store = createStore(
    combinedReducers,
    initialState,
    compose(
      applyMiddleware(...middlewares),
      ...enhancers,
    ),
  )
  return store
}