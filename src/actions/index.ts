import { ICounter } from '../types';

export enum Actions {
  AddCounter = 'ADD_COUNTER',
  DecreaseCount = 'DECREASE_COUNT',
  IncreaseCount = 'INCREASE_COUNT',
  RemoveCounter = 'REMOVE_COUNTER',
  DownloadCounters = 'DOWNLOAD_COUNTERS',
  DownloadCountersSuccess = 'DOWNLOAD_COUNTERS_SUCCESS',
  DownloadCountersFailure = 'DOWNLOAD_COUNTERS_FAILURE',
}

export const addCounter = () => {
  return {
    type: Actions.AddCounter,
  };
};

export const decreaseCount = (counterId: number) => {
  return {
    type: Actions.DecreaseCount,
    counterId,
  };
};

export const increaseCount = (counterId: number) => {
  return {
    type: Actions.IncreaseCount,
    counterId,
  };
};

export const removeCounter = (counterId: number) => {
  return {
    type: Actions.RemoveCounter,
    counterId,
  };
};

export const downloadCounters = () => {
  return {
    type: Actions.DownloadCounters,
  };
};

export const downloadCountersFailure = () => {
  return {
    type: Actions.DownloadCountersFailure,
  };
};

export const downloadCountersSuccess = (counters: ICounter[]) => {
  return {
    type: Actions.DownloadCountersSuccess,
    counters,
  };
};

export interface ICounterAction {
  type: Actions;
  counterId?: number;
  counters?: ICounter[];
}
