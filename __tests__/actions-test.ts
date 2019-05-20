import counterReducer from '../src/reducers';
import {
  Actions,
  addCounter,
  decreaseCount,
  increaseCount,
  removeCounter,
  getCounters,
  getCountersSuccess,
  getCountersFailure,
} from '../src/actions';
import { ICounter } from '../src/types';

it('adds counter', () => {
  const generatedAction = addCounter();

  expect(generatedAction).toEqual({
    type: Actions.AddCounter,
  });
});

it('decreases count', () => {
  const generatedAction = decreaseCount(0);

  expect(generatedAction).toEqual({
    type: Actions.DecreaseCount,
    counterId: 0,
  });
});

it('increases count', () => {
  const generatedAction = increaseCount(0);

  expect(generatedAction).toEqual({
    type: Actions.IncreaseCount,
    counterId: 0,
  });
});

it('removes counter', () => {
  const generatedAction = removeCounter(0);

  expect(generatedAction).toEqual({
    type: Actions.RemoveCounter,
    counterId: 0,
  });
});

it('gets counters', () => {
  const generatedAction = getCounters();

  expect(generatedAction).toEqual({
    type: Actions.GetCounters,
  });
});

it('get counters - success', () => {
  const counters: ICounter[] = [{ count: 1 }];
  const generatedAction = getCountersSuccess(counters);

  expect(generatedAction).toEqual({
    type: Actions.GetCountersSuccess,
    counters,
  });
});

it('gets counters - failure', () => {
  const generatedAction = getCountersFailure();

  expect(generatedAction).toEqual({
    type: Actions.GetCountersFailure,
  });
});
