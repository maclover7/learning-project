import ICounter from '../types';
import { ICounterAction, Actions } from '../actions';

const initialState = [{ count: 0 }, { count: 5 }];

export default function counterReducer(
  state = initialState,
  action: ICounterAction,
) {
  switch (action.type) {
    case Actions.IncreaseCount:
      return state.map((counter: ICounter, index: number) => {
        if (action.counterId === index) {
          return {
            count: counter.count + 1,
          };
        }

        return counter;
      });
    case Actions.DecreaseCount:
      return state.map((counter: ICounter, index: number) => {
        if (action.counterId === index) {
          return {
            count: counter.count - 1,
          };
        }

        return counter;
      });
    default:
      return state;
  }
}
