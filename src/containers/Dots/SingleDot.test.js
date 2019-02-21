import React from 'react';
import { mount } from 'enzyme';
import { SingleDot } from './SingleDot';

describe('<SingleDot />', () => {
  it('should render SingleDot component', () => {
    const component = mount(<SingleDot />);
    expect(component.length).toEqual(1);
  });
});
