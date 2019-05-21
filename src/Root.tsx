import React, { Component } from 'react';
import { Provider } from 'react-redux';
import createStore from './store';
import App from './containers/App';

const store = createStore();

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
