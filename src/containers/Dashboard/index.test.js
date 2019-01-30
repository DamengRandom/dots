import React from 'react';
import { mount } from 'enzyme';
import { Dashboard } from './index';

describe('<Dashboard />', () => {
  it('should render Dashboard component', () => {
    const component = mount(<Dashboard />);
    expect(component.length).toEqual(1);
  });
});
