import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyleNavbarContainer = styled.div`
  width: 100%;
  display: flex;
`;

const StyleNavbarSection = styled.div`
  width: 50%;
  @media only screen and (max-width: 600px) {
    width: 100%;
  };
`;

const StyleNavRight = styled(StyleNavbarSection)`
  text-align: right;
  a {
    padding: 6pt 12pt;
    border: 1px solid;
    margin-right: 6pt; 
  }
  a:last-child {
    margin-right: 12pt;
  }
`;

const NavbarContainer = (props) => (
  <StyleNavbarContainer>
    <StyleNavbarSection>{ props.left }</StyleNavbarSection>
    <StyleNavRight>{ props.right }</StyleNavRight>
  </StyleNavbarContainer>
);

const NavLeft = ({ title }) => (
  <React.Fragment>
    <h3>{title}</h3>
  </React.Fragment>
);

const NavRight = ({ links }) => (
  <React.Fragment>
    {
      links.map((link, index) => (
        <Link key={index} to={link.url}>{link.name}</Link>
      )) 
    }
  </React.Fragment>
);

const Navbar = ({title, links}) => {
  return (
    <NavbarContainer 
      left={
        <NavLeft title={title} />
      }
      right={
        <NavRight links={links} />
      }
    />
  )
}

export { Navbar };
