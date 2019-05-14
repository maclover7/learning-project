/**
 * @format
 */

import React from 'react';
import {Button} from 'react-native';
import Counter from '../Counter';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Counter />);
});

it ('decreases count', () => {
  const wrapper = shallow(<Counter />);
  const instance = wrapper.instance() as Counter;
  const spy = jest.spyOn(instance, 'changeCount');

  expect(instance.state.count).toBe(0);

  instance.forceUpdate();
  wrapper.find({
    title: "Decrease Count"
  }).props().onPress();

  expect(spy).toHaveBeenCalledTimes(1);
  expect(instance.state.count).toBe(-1);
});

it ('increases count', () => {
  const wrapper = shallow(<Counter />);
  const instance = wrapper.instance() as Counter;
  const spy = jest.spyOn(instance, 'changeCount');

  expect(instance.state.count).toBe(0);

  instance.forceUpdate();
  wrapper.find({
    title: "Increase Count"
  }).props().onPress();

  expect(spy).toHaveBeenCalledTimes(1);
  expect(instance.state.count).toBe(1);
});
