import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import ReadDots from './ReadDots';

const storeFake = state => ({
  default: () => {
  },
  subscribe: () => {
  },
  dispatch: () => {
  },
  getState: () => ({ ...state })
});

const store = storeFake({
  dot: {
    dots: [
      {
        id: '1',
        dot: 'test data',
        cost: '100',
        tag: 'pocket money'
      }
    ]
  }
});

describe('<ReadDots />', () => {
  it('should render ReadDots component', () => {
    const component = mount(
      <Provider store={store}>
        <Router>
          <ReadDots />
        </Router>
      </Provider>
    );
    expect(component.length).toEqual(1);
  });
});
