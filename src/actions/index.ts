export enum Actions {
  AddCounter = 'ADD_COUNTER',
  DecreaseCount = 'DECREASE_COUNT',
  IncreaseCount = 'INCREASE_COUNT',
  RemoveCounter = 'REMOVE_COUNTER',
}

export const addCounter = () => {
  return {
    type: Actions.AddCounter,
    counterId: 0,
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

export interface ICounterAction {
  type: Actions;
  counterId: number;
}
