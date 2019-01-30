import React from 'react';
import ReactDOM from 'react-dom';

import { Routes } from '../src/routes';

const Base = () => {
  return (
    <div>
      <Routes />
    </div>
  );
}

ReactDOM.render(<Base />, document.getElementById('root'));
