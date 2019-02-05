import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Routes } from '../src/routes';
import configureStore from './store/configureStore';

const store = configureStore();

const Base = () => {
  return (
    <div>
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  );
}

ReactDOM.render(<Base />, document.getElementById('root'));
