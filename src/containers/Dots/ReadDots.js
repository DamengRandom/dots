import React from 'react';
import { connect } from 'react-redux';
import { SingleDot } from './SingleDot';
import { deleteDot } from '../../actions/dots';
class ReadDots extends React.Component {
  render() {
    const renderDots = (dots) => {
      return dots.map((dot, index) => {
        console.log('whats dot? ', dot);
        return <SingleDot key={`dot${index}-${dot.dot}`}
          dot={dot}
          removeDot={this.props.deleteDot} />
      });
    };
    return (
      <div>
        { this.props.dots ?
          renderDots(this.props.dots) : <p>No data yet ..</p> }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dots: state.dot.dots
  }
};

const mapDispatchToProps = { deleteDot };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReadDots);
