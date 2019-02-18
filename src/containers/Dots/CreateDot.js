import React from 'react';
import { connect } from 'react-redux';
import DotsForm from './DotsForm';
import { createDot } from '../../actions/dots';

// const handleSaveTempStorage = (dot) => {
//   let existingStorage = JSON.parse(localStorage.getItem('dots'));
//   let newAddDot = JSON.stringify(dot);
//   if(existingStorage === null) {
//     existingStorage = [];
//   }
//   localStorage.setItem('currentDot', newAddDot);
//   existingStorage.push(newAddDot);
//   localStorage.setItem('dots', JSON.stringify(existingStorage));
// }

const CreateDotWrapper = (props) => {
  return (
    <div>
      <DotsForm formSubmit={ dot => {
        props.createDot(dot);
        // await handleSaveTempStorage(dot); // temproray store data
        props.history.push('/');
      }} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    dot: state.dot.dots
  }
}

const mapDispatchToProps = {createDot};

const CreateDot = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateDotWrapper);

export { CreateDot };
