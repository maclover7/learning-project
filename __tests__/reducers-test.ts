import counterReducer from '../src/reducers';
import {
  addCounter,
  decreaseCount,
  getCounters,
  getCountersFailure,
  getCountersSuccess,
  increaseCount,
  removeCounter,
} from '../src/actions';
import { LoadingStatus } from '../src/types';

it('adds counter', () => {
  const initialState = {
    counters: [{ count: 0 }],
    loadingStatus: LoadingStatus.Loading,
  };

  const modifiedState = counterReducer(initialState, addCounter());
  expect(modifiedState).toEqual({
    counters: [{ count: 0 }, { count: 0 }],
    loadingStatus: LoadingStatus.Loading,
  });
});

it('decreases count', () => {
  const initialState = {
    counters: [{ count: 0 }],
    loadingStatus: LoadingStatus.Loading,
  };

  const modifiedState = counterReducer(initialState, decreaseCount(0));
  expect(modifiedState).toEqual({
    counters: [{ count: -1 }],
    loadingStatus: LoadingStatus.Loading,
  });
});

it('increases count', () => {
  const initialState = {
    counters: [{ count: 0 }],
    loadingStatus: LoadingStatus.Loading,
  };

  const modifiedState = counterReducer(initialState, increaseCount(0));
  expect(modifiedState).toEqual({
    counters: [{ count: 1 }],
    loadingStatus: LoadingStatus.Loading,
  });
});

it('removes counter', () => {
  const initialState = {
    counters: [{ count: 0 }],
    loadingStatus: LoadingStatus.Loading,
  };

  const modifiedState = counterReducer(initialState, removeCounter(0));
  expect(modifiedState).toEqual({
    counters: [],
    loadingStatus: LoadingStatus.Loading,
  });
});

it('gets counters', () => {
  const initialState = {
    counters: [],
    loadingStatus: LoadingStatus.Unknown,
  };

  const modifiedState = counterReducer(initialState, getCounters());
  expect(modifiedState).toEqual({
    counters: [],
    loadingStatus: LoadingStatus.Loading,
  });
});

it('gets counters - success', () => {
  const initialState = {
    counters: [],
    loadingStatus: LoadingStatus.Loading,
  };

  const modifiedState = counterReducer(
    initialState,
    getCountersSuccess([{ count: 1 }]),
  );
  expect(modifiedState).toEqual({
    counters: [{ count: 1 }],
    loadingStatus: LoadingStatus.Success,
  });
});

it('gets counters - failure', () => {
  const initialState = {
    counters: [],
    loadingStatus: LoadingStatus.Loading,
  };

  const modifiedState = counterReducer(initialState, getCountersFailure());
  expect(modifiedState).toEqual({
    counters: [],
    loadingStatus: LoadingStatus.Failure,
  });
});
