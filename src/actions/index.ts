import { ICounter } from '../types';

export enum Actions {
  AddCounter = 'ADD_COUNTER',
  DecreaseCount = 'DECREASE_COUNT',
  IncreaseCount = 'INCREASE_COUNT',
  RemoveCounter = 'REMOVE_COUNTER',
  GetCounters = 'GET_COUNTERS',
  GetCountersSuccess = 'GET_COUNTERS_SUCCESS',
  GetCountersFailure = 'GET_COUNTERS_FAILURE',
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

export const getCounters = () => {
  return {
    type: Actions.GetCounters,
  };
};

export const getCountersFailure = () => {
  return {
    type: Actions.GetCountersFailure,
  };
};

export const getCountersSuccess = (counters: ICounter[]) => {
  return {
    type: Actions.GetCountersSuccess,
    counters,
  };
};

export interface ICounterAction {
  type: Actions;
  counterId?: number;
  counters?: ICounter[];
}
