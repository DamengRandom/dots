import React from 'react';
import { mount } from 'enzyme';
import DotsForm from './DotsForm';

describe('<DotsForm />', () => {
  it('should render DotsForm component', () => {
    const component = mount(<DotsForm />);
    expect(component.length).toEqual(1);
  });
});
