import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
// components
import { Navbar } from 'dmjs-react-components';
import { title, links } from '../../configs';

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
      showDots: []
    }
    this.handleNavScroll = this.handleNavScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleNavScroll);
    // this.setState({
    //   showDots: JSON.parse(localStorage.getItem('dots'))
    // });
    this.setState({
      showDots: this.props.dots
    });
  }

  handleNavScroll = () => {
    console.log('current scroll', window.scrollY);
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
            this.state.showDots.map((dot, index) => {
              // dot = JSON.parse(dot)
              return (
                <div key={index}>
                  <h3>{dot.dot}</h3>
                  <p><i>{dot.cost}</i></p>
                  <p><i>{dot.date}</i></p>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dots: state.dots
  }
}

export default connect(mapStateToProps)(Dashboard);
