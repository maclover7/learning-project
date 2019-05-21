import counterReducer from '../src/reducers';
import {
  Actions,
  addCounter,
  decreaseCount,
  increaseCount,
  removeCounter,
  downloadCounters,
  downloadCountersSuccess,
  downloadCountersFailure,
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

it('downloads counters', () => {
  const generatedAction = downloadCounters();

  expect(generatedAction).toEqual({
    type: Actions.DownloadCounters,
  });
});

it('downloads counters - success', () => {
  const counters: ICounter[] = [{ count: 1 }];
  const generatedAction = downloadCountersSuccess(counters);

  expect(generatedAction).toEqual({
    type: Actions.DownloadCountersSuccess,
    counters,
  });
});

it('downloads counters - failure', () => {
  const generatedAction = downloadCountersFailure();

  expect(generatedAction).toEqual({
    type: Actions.DownloadCountersFailure,
  });
});
