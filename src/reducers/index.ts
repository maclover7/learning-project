import ICounter from '../types';

const initialState = [
  { count: 0 },
  { count: 5 }
];

interface ICounterReducerAction {
  type: string,
  counterId: number
}

export default function counterReducer(state = initialState, action: ICounterReducerAction) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return state.map((counter: ICounter, index: number) => {
        if (action.counterId === index) {
          return {
            count: counter.count + 1,
          }
        }

        return counter;
      });
    case 'DECREASE_COUNT':
      return state.map((counter: ICounter, index: number) => {
        if (action.counterId === index) {
          return {
            count: counter.count - 1,
          }
        }

        return counter;
      });
    default:
      return state
  }
}
