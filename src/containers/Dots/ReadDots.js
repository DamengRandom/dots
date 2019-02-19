import React from 'react';
import { connect } from 'react-redux';
import { readDots } from '../../actions/dots';
import { SingleDot } from './SingleDot';

class ReadDots extends React.Component {
  componentDidMount() {
    this.props.readDots();
  }

  renderDots = () => {
    return this.props.dots.map(dot => (
        <SingleDot key={dot.id} dot={dot} />
      ));
  };

  render() {
    return (
      <div>
        { this.props.dots && this.props.dots.length > 0 ?
          this.renderDots() : <p>No data yet ..</p> }
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
