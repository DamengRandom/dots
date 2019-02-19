import React from 'react';
import { connect } from 'react-redux';
import DotsForm from './DotsForm';
import { createDot } from '../../actions/dots';

const CreateDotWrapper = (props) => {
  return (
    <div>
      <DotsForm formSubmit={ dot => {
        props.createDot(dot);
        props.history.push('/');
      }} />
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    dot: state.dot.dots
  }
};

const mapDispatchToProps = {createDot};

const CreateDot = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateDotWrapper);

export { CreateDot };
