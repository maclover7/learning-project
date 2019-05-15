import React from 'react';
import Counter from '../src/Counter';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const component = renderer.create(<Counter count={0}
                                             decreaseCount={() => {}}
                                             increaseCount={() => {}} />);
  expect(component.toJSON()).toMatchSnapshot();
});
