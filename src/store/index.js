import { combineReducers, applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import { mmReducer, verifyReducer } from '../reducers'

var store;

export default {

  configureStore: () => {

      const reducers = combineReducers({
        middleman: mmReducer,
        verify: verifyReducer

      })

      store = createStore(
        reducers,
        applyMiddleware(thunk)
      )
      return store
  },

  currentStore: () => {
    return store
  }
}
