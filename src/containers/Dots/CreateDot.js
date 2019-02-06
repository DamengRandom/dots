import React from 'react';
import { connect } from 'react-redux';
import DotsForm from './DotsForm';
import { createDot } from '../../actions/dots';

const CreateDotWrapper = (props) => {
  return (
    <div>
      <DotsForm formSubmit={dot => {
        props.dispatch(createDot(dot));
        props.history.push('/');
      }} />
    </div>
  )
}

const CreateDot = connect()(CreateDotWrapper);

export { CreateDot };
