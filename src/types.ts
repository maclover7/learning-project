export interface ICounter {
  count: number;
}

export enum LoadingStatus {
  Unknown = 'Unknown',
  Loading = 'Loading',
  Success = 'Success',
  Failure = 'Failure'
}

export interface IState {
  counters: ICounter[];
  loadingStatus: LoadingStatus;
}
