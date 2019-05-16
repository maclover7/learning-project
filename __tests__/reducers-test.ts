import counterReducer from '../src/reducers';
import {
  addCounter,
  decreaseCount,
  increaseCount,
  removeCounter,
} from '../src/actions';

it('adds counter', () => {
  const initialState = [{ count: 0 }];
  const modifiedState = counterReducer(initialState, addCounter());
  expect(modifiedState).toEqual([{ count: 0 }, { count: 0 }]);
});

it('decreases count', () => {
  const initialState = [{ count: 0 }];
  const modifiedState = counterReducer(initialState, decreaseCount(0));
  expect(modifiedState).toEqual([{ count: -1 }]);
});

it('increases count', () => {
  const initialState = [{ count: 0 }];
  const modifiedState = counterReducer(initialState, increaseCount(0));
  expect(modifiedState).toEqual([{ count: 1 }]);
});

it('removes counter', () => {
  const initialState = [{ count: 0 }];
  const modifiedState = counterReducer(initialState, removeCounter(0));
  expect(modifiedState).toEqual([]);
});
