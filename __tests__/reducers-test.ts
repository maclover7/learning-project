import counterReducer from '../src/reducers';

it('decreases count', () => {
  const initialState = [{ count: 0 }];
  const modifiedState = counterReducer(initialState, { type: 'DECREASE_COUNT', counterId: 0 });
  expect(modifiedState).toEqual([{ count: -1 }]);
});

it('increases count', () => {
  const initialState = [{ count: 0 }];
  const modifiedState = counterReducer(initialState, { type: 'INCREASE_COUNT', counterId: 0 });
  expect(modifiedState).toEqual([{ count: 1 }]);
});
