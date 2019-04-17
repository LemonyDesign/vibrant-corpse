import setDisplayWorkshop from '../../src/reducers/setDisplayWorkshop';

describe('authenticate setDisplayWorkshop reducer', () => {
  const initialState = false;

  test('returns the initial state', () => {
    expect(setDisplayWorkshop(undefined, {})).toEqual(initialState);
  });
  test('handles workshop display', () => {
    const action = {
      type: 'WORKSHOP_DISPLAY',
    };
    const expectedState = true;
    const outputState = setDisplayWorkshop(initialState, action);
    expect(outputState).toEqual(expectedState);
  });
});
