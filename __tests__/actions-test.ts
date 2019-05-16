import counterReducer from '../src/reducers';
import {
  Actions,
  addCounter,
  decreaseCount,
  increaseCount,
  removeCounter,
} from '../src/actions';

it('adds counter', () => {
  const generatedAction = addCounter();

  expect(generatedAction).toEqual({
    type: Actions.AddCounter,
    counterId: 0,
  });
});

it('decreases count', () => {
  const generatedAction = decreaseCount(0);

  expect(generatedAction).toEqual({
    type: Actions.DecreaseCount,
    counterId: 0,
  });
});

it('increases count', () => {
  const generatedAction = increaseCount(0);

  expect(generatedAction).toEqual({
    type: Actions.IncreaseCount,
    counterId: 0,
  });
});

it('removes counter', () => {
  const generatedAction = removeCounter(0);

  expect(generatedAction).toEqual({
    type: Actions.RemoveCounter,
    counterId: 0,
  });
});
