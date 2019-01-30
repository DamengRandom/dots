import { createStore, combineReducers } from 'redux';
import dotsReducer from '../reducers/dots';

export default () => {
  const store = createStore(
    combineReducers({
      dots: dotsReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
}
