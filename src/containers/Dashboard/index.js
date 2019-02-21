import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
// components
import { Navbar } from 'dmjs-react-components';
import { title, links } from '../../configs';
import ReadDots from '../Dots/ReadDots';
import { readDots } from '../../actions/dots';

const StickyBar = styled.div`
  position: fixed;
  top: 0px;
  width: 100%;
  height: 40pt;
  background-color: #00a7f8;
  color: white;
  border-bottom: 1px solid #ddd;
`;

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showStickyBar: false,
    }
    this.handleNavScroll = this.handleNavScroll.bind(this);
    this.props.readDots();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleNavScroll);
  }

  handleNavScroll = () => {
    if(window.scrollY >= 60) {
      this.setState({
        showStickyBar: true
      });
    }
    else {
      this.setState({
        showStickyBar: false
      });
    }
  }

  render() {
    return (
      <div>
        { this.state.showStickyBar &&
          <StickyBar ref={this.div}>
            <Navbar title={title} links={links} />
          </StickyBar>
        }
        <div>
          List:
          {
            this.props.dots && <ReadDots dots={this.props.dots} />
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dots: state.dot.dots
  }
};

const mapDispatchToProps = { readDots };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
