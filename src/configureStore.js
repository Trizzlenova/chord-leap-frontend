import { createStore, applyMiddleware } from 'redux'
import getChords from './reducers/chord'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';


function configureStore() {
  const store = createStore(
    reducer,
    composeWithDevTools(
      applyMiddleware(thunk)),
  )
  return store
}

export default configureStore
