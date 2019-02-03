import React from 'react';
import { mount } from 'enzyme';
import { ColorText } from './index';

describe('<ColorText />', () => {
  it('should render ColorText component', () => {
    const component = mount(<ColorText />);
    expect(component.length).toEqual(1);
  });
});
