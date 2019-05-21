import { IDownloadState, LoadingStatus } from '../types';
import { ICounterAction, Actions } from '../actions';

const initialDownloadState: IDownloadState = {
  loadingStatus: LoadingStatus.Unknown,
};

export default function loadingStatus(
  state = initialDownloadState,
  action: ICounterAction,
) {
  switch (action.type) {
    case Actions.DownloadCounters:
      return { loadingStatus: LoadingStatus.Loading };

    case Actions.DownloadCountersSuccess:
      return { loadingStatus: LoadingStatus.Success };

    case Actions.DownloadCountersFailure:
      return { loadingStatus: LoadingStatus.Failure };

    default:
      return state;
  }
}
