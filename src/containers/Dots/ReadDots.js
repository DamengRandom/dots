import React from 'react';
import { connect } from 'react-redux';
import { readDots } from '../../actions/dots';
import { SingleDot } from './SingleDot';

class ReadDots extends React.Component {
  componentDidMount() {
    this.props.readDots();
  }

  render() {
    const renderDots = (dots) => {
      return dots.map(dot => {
        console.log('whats dot? ', dot);
        return <SingleDot key={`${dot.id}-${dot.dot}`} dot={dot} />
      });
    };
    return (
      <div>
        { this.props.dots && this.props.dots.length > 0 ?
          renderDots(this.props.dots) : <p>No data yet ..</p> }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dots: state.dot.dots
  }
}
const mapDispatchToProps = {readDots};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReadDots);
