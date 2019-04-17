import setStartWorkshop from '../../src/reducers/setStartWorkshop';

describe('authenticate setStartWorkshop reducer', () => {
  const initialState = false;

  test('returns the initial state', () => {
    expect(setStartWorkshop(undefined, {})).toEqual(initialState);
  });
  test('handles workshop display', () => {
    const action = {
      type: 'WORKSHOP_START',
    };
    const expectedState = true;
    const outputState = setStartWorkshop(initialState, action);
    expect(outputState).toEqual(expectedState);
  });
});
