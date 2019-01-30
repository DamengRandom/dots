import React from 'react';
import { mount } from 'enzyme';
import { CreateDot } from './CreateDot';

describe('<CreateDot />', () => {
  it('should render CreateDot component', () => {
    const component = mount(<CreateDot />);
    expect(component.length).toEqual(1);
  });
});
