/**
 * @format
 */

import React from 'react';
import { Button } from 'react-native';
import Counter from '../src/Counter';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const component = renderer.create(<Counter />);
  expect(component.toJSON()).toMatchSnapshot();
});

it('decreases count', () => {
  const component = renderer.create(<Counter />);
  (component.getInstance() as any).decreaseCount();

  expect(component.toJSON()).toMatchSnapshot();
});

it('increases count', () => {
  const component = renderer.create(<Counter />);
  (component.getInstance() as any).increaseCount();

  expect(component.toJSON()).toMatchSnapshot();
});
