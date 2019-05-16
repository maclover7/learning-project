import ICounter from '../types';
import { ICounterAction, Actions } from '../actions';

const initialState = [{ count: 0 }, { count: 5 }];

export default function counterReducer(
  state = initialState,
  action: ICounterAction,
) {
  switch (action.type) {
    case Actions.AddCounter:
      state.unshift({ count: 0 });
      return state.slice(0);
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
      state.splice(action.counterId, 1);
      return state.slice(0);
    default:
      return state;
  }
}
