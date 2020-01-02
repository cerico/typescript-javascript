import { combineReducers } from 'redux'
import blacksData from '../../Data/Blacks'
import bluesData from '../../Data/Blues'

const blacks = (state = blacksData, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const blues = (state = bluesData, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const combinedReducers = combineReducers({
  blacks,
  blues
})

export default combinedReducers
