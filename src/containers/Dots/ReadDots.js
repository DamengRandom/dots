import React from 'react';
import { SingleDot } from './SingleDot';

class ReadDots extends React.Component {
  render() {
    const renderDots = (dots) => {
      return dots.map((dot, index) => {
        console.log('whats dot? ', dot);
        return <SingleDot key={`dot${index}-${dot.dot}`} dot={dot} />
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

export default ReadDots;
