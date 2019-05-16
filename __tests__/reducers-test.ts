import counterReducer from '../src/reducers';
import { decreaseCount, increaseCount } from '../src/actions';

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
