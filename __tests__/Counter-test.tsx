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

interface createCounterCb { (component: Counter): void }
const createCounter = (componentButtonText: string, cb: createCounterCb) => {
  const wrapper = shallow(<Counter />);
  const instance = wrapper.instance() as Counter;
  const spy = jest.spyOn(instance, 'changeCount');

  expect(instance.state.count).toBe(0);

  instance.forceUpdate();
  wrapper.find({
    title: componentButtonText
  }).props().onPress();

  expect(spy).toHaveBeenCalledTimes(1);

  cb(instance);
};

it('renders correctly', () => {
  renderer.create(<Counter />);
});

it ('decreases count', () => {
  createCounter("Decrease Count", (component: Counter) => {
    expect(component.state.count).toBe(-1);
  });
});

it ('increases count', () => {
  createCounter("Increase Count", (component: Counter) => {
    expect(component.state.count).toBe(1);
  });
});
