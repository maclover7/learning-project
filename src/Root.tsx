import React, { Component } from 'react';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { counterSaga } from './sagas';
import App from './containers/App';

const sagaMiddleware = createSagaMiddleware();
//const rootReducer = combineReducers({ countersReducer, counterReducer });
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(counterSaga);

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
