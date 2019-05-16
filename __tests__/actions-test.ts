import counterReducer from '../src/reducers';
import { Actions, decreaseCount, increaseCount } from '../src/actions';

it('decreases count', () => {
  const generatedAction = decreaseCount(0);

  expect(generatedAction).toEqual({
    type: Actions.DecreaseCount,
    counterId: 0
  });
});

it('increases count', () => {
  const generatedAction = increaseCount(0);

  expect(generatedAction).toEqual({
    type: Actions.IncreaseCount,
    counterId: 0
  });
});
