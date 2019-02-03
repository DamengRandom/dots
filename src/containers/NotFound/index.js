import React from 'react';
// import { ColorText } from '../../components/ColorText';
import { NotFoundWrapper } from '../../components/NotFound';

const message = 'Whoops... Page Not Found (404)';

const NotFound = () => {
  return (
    <div>
      <NotFoundWrapper message={message} />
    </div>
  )
}

export default NotFound;
