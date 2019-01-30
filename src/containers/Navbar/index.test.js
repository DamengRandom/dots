import React from 'react';
import { mount } from 'enzyme';
import { Navbar } from './Navbar';

describe('<Navbar />', () => {
  it('should render Navbar component', () => {
    const component = mount(<Navbar />);
    expect(component.length).toEqual(1);
  });
});
