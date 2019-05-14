/**
 * @format
 */

import React from 'react';
import {Button} from 'react-native';
import Counter from '../Counter';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const ensureCompliantCounterSnapshot = (componentButtonText: string) => {
  const component = renderer.create(
    <Counter />
  );
  expect(component.toJSON()).toMatchSnapshot();

  component.root.findByProps({ title: componentButtonText }).props.onPress();

  expect(component.toJSON()).toMatchSnapshot();
};

it('renders correctly', () => {
  renderer.create(<Counter />);
});

it ('decreases count', () => {
  ensureCompliantCounterSnapshot("Decrease Count");
});

it ('increases count', () => {
  ensureCompliantCounterSnapshot("Increase Count");
});
