import React from 'react';
import { connect } from 'react-redux';
import DotsForm from './DotsForm';
import { createDot } from '../../actions/dots';

const handleSaveTempStorage = (dot) => {
  let existingStorage = JSON.parse(localStorage.getItem('dots'));
  let newAddDot = JSON.stringify(dot);
  if(existingStorage === null) {
    existingStorage = [];
  }
  localStorage.setItem('currentDot', newAddDot);
  existingStorage.push(newAddDot);
  localStorage.setItem('dots', JSON.stringify(existingStorage));
}

const CreateDotWrapper = (props) => {
  return (
    <div>
      <DotsForm formSubmit={ async dot => {
        await props.dispatch(createDot(dot));
        await handleSaveTempStorage(dot); // temproray store data
        await props.history.push('/');
      }} />
    </div>
  )
}

const CreateDot = connect()(CreateDotWrapper);

export { CreateDot };
