import { ICounter, LoadingStatus, IState } from '../types';
import { ICounterAction, Actions } from '../actions';

const initialState: IState = {
  counters: [{ count: 0 }, { count: 5 }],
  loadingStatus: LoadingStatus.Loading,
};

export default function counterReducer(
  state = initialState,
  action: ICounterAction,
) {
  let counters;

  switch (action.type) {
    case Actions.AddCounter:
      counters = [{ count: 0 }, ...state.counters];
      return Object.assign({}, state, { counters });
    case Actions.DecreaseCount:
      counters = state.counters.map((counter: ICounter, index: number) => {
        if (action.counterId === index) {
          return {
            count: counter.count - 1,
          };
        }

        return counter;
      });

      return Object.assign({}, state, { counters });
    case Actions.IncreaseCount:
      counters = state.counters.map((counter: ICounter, index: number) => {
        if (action.counterId === index) {
          return {
            count: counter.count + 1,
          };
        }

        return counter;
      });

      return Object.assign({}, state, { counters });
    case Actions.RemoveCounter:
      counters = state.counters.filter((counter: ICounter, index: number) => {
        return index !== action.counterId;
      });

      return Object.assign({}, state, { counters });
    default:
      return state;
  }
}
