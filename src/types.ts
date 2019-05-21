export interface ICounter {
  count: number;
}

export interface ICounterState {
  counters: ICounter[];
}

export interface IDownloadState {
  loadingStatus: LoadingStatus;
}

export enum LoadingStatus {
  Unknown = 'Unknown',
  Loading = 'Loading',
  Success = 'Success',
  Failure = 'Failure'
}

export interface IState {
  counters: ICounterState;
  loadingStatus: IDownloadState;
}
