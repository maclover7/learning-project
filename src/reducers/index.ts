import ICounter from '../types';
import { ICounterAction, Actions } from '../actions';

const initialState = [{ count: 0 }, { count: 5 }];

export default function counterReducer(
  state = initialState,
  action: ICounterAction,
) {
  switch (action.type) {
    case Actions.AddCounter:
      return [{ count: 0 }, ...state];
    case Actions.DecreaseCount:
      return state.map((counter: ICounter, index: number) => {
        if (action.counterId === index) {
          return {
            count: counter.count - 1,
          };
        }

        return counter;
      });
    case Actions.IncreaseCount:
      return state.map((counter: ICounter, index: number) => {
        if (action.counterId === index) {
          return {
            count: counter.count + 1,
          };
        }

        return counter;
      });
    case Actions.RemoveCounter:
      return state.filter((counter: ICounter, index: number) => {
        return index !== action.counterId;
      });
    default:
      return state;
  }
}
