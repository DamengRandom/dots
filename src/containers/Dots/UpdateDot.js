import React from 'react';
import { connect } from 'react-redux';
import { updateDot } from '../../actions/dots';
import DotsForm from './DotsForm';

export const UpdateDotWrapper = (props) => {
  const currentDitID = props.match.params.id;
  const passOldDot = () => {
    return props.dots.find(dot =>
      dot.id === currentDitID); 
  }
  return (
    <DotsForm oldDot={props.dots && passOldDot()}
      formSubmit={updatedDot => {
        console.log('updateDot', updatedDot);
        const updatedDotObject = {
          ...updatedDot,
          id: currentDitID
        }
        props.updateDot(updatedDotObject);
        props.history.push('/');
      }}
    />
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
