import React from 'react';
import Root from '../src/Root';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const component = renderer.create(<Root />);

  expect(component.toJSON()).toMatchSnapshot();
});
