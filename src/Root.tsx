import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counterReducer from './reducers';
import App from './containers/App';

const store = createStore(counterReducer);

interface IProps {}
interface IState {}
export default class Root extends Component<IProps, IState> {
  public render() {
    return(
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
