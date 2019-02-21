import React from 'react';
import { mount } from 'enzyme';
import { UpdateDot } from './UpdateDot';

describe('<UpdateDot />', () => {
  it('should render UpdateDot component', () => {
    const component = mount(<UpdateDot />);
    expect(component.length).toEqual(1);
  });
});
