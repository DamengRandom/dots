import React from 'react';
import { Link } from 'react-router-dom';

export const SingleDot = ({ dot, removeDot }) => {
  return (
    <React.Fragment>
      <h4>
        <Link to={`/update-dot/${dot.id}`}>{dot.dot}</Link>
      </h4>
      <p>{dot.date}</p>
      <p>{dot.cost}</p>
      <p>{dot.tag}</p>
      <button onClick={() => removeDot(dot.id)}>Delete</button>
    </React.Fragment>
  );
}
