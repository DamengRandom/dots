import React from 'react';
import styled from 'styled-components';
// components
import { ColorText } from '../ColorText';

const StyledNotFound = styled.div`
  color: ${props => props.color};
`;

const NotFound = (props) => {
  return (
    <div>
      <StyledNotFound {...props}>
        { props.message || 'Oops, page not found ..' }
      </StyledNotFound>
    </div>
  );
}

const NotFoundWrapper = ColorText(NotFound);

export { NotFoundWrapper };
