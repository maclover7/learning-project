export enum Actions {
  DecreaseCount = 'DECREASE_COUNT',
  IncreaseCount = 'INCREASE_COUNT'
};

export const decreaseCount = (counterId: number) => {
  return {
    type: Actions.DecreaseCount,
    counterId
  };
};

export const increaseCount = (counterId: number) => {
  return {
    type: Actions.IncreaseCount,
    counterId
  };
};

export interface ICounterAction {
  type: Actions,
  counterId: number
};
