import React from 'react';
import { connect } from 'react-redux';
import { updateDot } from '../../actions/dots';
import DotsForm from './DotsForm';

export const UpdateDotWrapper = (props) => {
  return (
    <DotsForm formSubmit={dot => {
      props.updateDot(dot);
      props.history.push('/');
    }} />
  );
}

const mapStateToProps = (state) => {
  return {
    dots: state.dot.dots
  };
};

const mapDispatchToProps = { updateDot };

const UpdateDot = connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateDotWrapper);

export { UpdateDot };
