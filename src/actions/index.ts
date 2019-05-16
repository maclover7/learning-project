export enum Actions {
  AddCounter = 'ADD_COUNTER',
  DecreaseCount = 'DECREASE_COUNT',
  IncreaseCount = 'INCREASE_COUNT',
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

export interface ICounterAction {
  type: Actions;
  counterId?: number;
}
