import React from 'react';
import { mount } from 'enzyme';
import { NotFound } from './index';

describe('<NotFound />', () => {
  it('should render NotFound component', () => {
    const component = mount(<NotFound />);
    expect(component.length).toEqual(1);
  });
});
