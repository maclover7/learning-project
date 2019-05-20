import { combineReducers } from 'redux';
import { ICounter, LoadingStatus, IState } from '../types';
import { ICounterAction, Actions } from '../actions';

const initialState: IState = {
  counters: [],
  loadingStatus: LoadingStatus.Unknown,
};

const counterReducer = (state = initialState, action: ICounterAction) => {
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
    case Actions.GetCounters:
      return Object.assign({}, state, { loadingStatus: LoadingStatus.Loading });
    case Actions.GetCountersSuccess:
      return Object.assign({}, state, {
        loadingStatus: LoadingStatus.Success,
        counters: action.counters,
      });
    case Actions.GetCountersFailure:
      return Object.assign({}, state, { loadingStatus: LoadingStatus.Failure });
    default:
      return state;
  }
};

export default counterReducer;
