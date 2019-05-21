import rootReducer from '../src/reducers';
import {
  addCounter,
  decreaseCount,
  downloadCounters,
  downloadCountersFailure,
  downloadCountersSuccess,
  increaseCount,
  removeCounter,
} from '../src/actions';
import { LoadingStatus } from '../src/types';

it('adds counter', () => {
  const initialState = {
    counters: {
      counters: [{ count: 0 }],
    },
    loadingStatus: {
      loadingStatus: LoadingStatus.Loading,
    },
  };

  const modifiedState = rootReducer(initialState, addCounter());
  expect(modifiedState).toEqual({
    counters: {
      counters: [{ count: 0 }, { count: 0 }],
    },
    loadingStatus: {
      loadingStatus: LoadingStatus.Loading,
    },
  });
});

it('decreases count', () => {
  const initialState = {
    counters: {
      counters: [{ count: 0 }],
    },
    loadingStatus: {
      loadingStatus: LoadingStatus.Loading,
    },
  };

  const modifiedState = rootReducer(initialState, decreaseCount(0));
  expect(modifiedState).toEqual({
    counters: {
      counters: [{ count: -1 }],
    },
    loadingStatus: {
      loadingStatus: LoadingStatus.Loading,
    },
  });
});

it('increases count', () => {
  const initialState = {
    counters: {
      counters: [{ count: 0 }],
    },
    loadingStatus: {
      loadingStatus: LoadingStatus.Loading,
    },
  };

  const modifiedState = rootReducer(initialState, increaseCount(0));
  expect(modifiedState).toEqual({
    counters: {
      counters: [{ count: 1 }],
    },
    loadingStatus: {
      loadingStatus: LoadingStatus.Loading,
    },
  });
});

it('removes counter', () => {
  const initialState = {
    counters: {
      counters: [{ count: 0 }],
    },
    loadingStatus: {
      loadingStatus: LoadingStatus.Loading,
    },
  };

  const modifiedState = rootReducer(initialState, removeCounter(0));
  expect(modifiedState).toEqual({
    counters: {
      counters: [],
    },
    loadingStatus: {
      loadingStatus: LoadingStatus.Loading,
    },
  });
});

it('downloads counters', () => {
  const initialState = {
    counters: {
      counters: [],
    },
    loadingStatus: {
      loadingStatus: LoadingStatus.Unknown,
    },
  };

  const modifiedState = rootReducer(initialState, downloadCounters());
  expect(modifiedState).toEqual({
    counters: {
      counters: [],
    },
    loadingStatus: {
      loadingStatus: LoadingStatus.Loading,
    },
  });
});

it('downloads counters - success', () => {
  const initialState = {
    counters: {
      counters: [],
    },
    loadingStatus: {
      loadingStatus: LoadingStatus.Loading,
    },
  };

  const modifiedState = rootReducer(
    initialState,
    downloadCountersSuccess([{ count: 1 }]),
  );
  expect(modifiedState).toEqual({
    counters: {
      counters: [{ count: 1 }],
    },
    loadingStatus: {
      loadingStatus: LoadingStatus.Success,
    },
  });
});

it('downloads counters - failure', () => {
  const initialState = {
    counters: {
      counters: [],
    },
    loadingStatus: {
      loadingStatus: LoadingStatus.Unknown,
    },
  };

  const modifiedState = rootReducer(initialState, downloadCountersFailure());
  expect(modifiedState).toEqual({
    counters: {
      counters: [],
    },
    loadingStatus: {
      loadingStatus: LoadingStatus.Failure,
    },
  });
});
