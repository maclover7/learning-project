import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { counterSaga } from './sagas';
import rootReducer from './reducers';

export default function create() {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
  );

  sagaMiddleware.run(counterSaga);

  return store;
}
