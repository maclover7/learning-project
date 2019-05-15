import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counterReducer from '../src/reducers';
import App from '../src/App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const store = createStore(counterReducer);
  const component = renderer.create(<App store={store} />);

  expect(component.toJSON()).toMatchSnapshot();
});
