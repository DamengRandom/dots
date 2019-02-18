import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import dotsReducer from '../reducers/dots';

const reducers = combineReducers({
  dot: dotsReducer
});

export default () => {
  const store = createStore(
    reducers,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    composeWithDevTools(applyMiddleware(thunk))
  );

  return store;
}
