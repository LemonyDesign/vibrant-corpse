import setOptionsState from '../../src/reducers/setOptionsState';

describe('authenticates setOptionsState reducer', () => {
  const initialState = {
    modifierOptions: '',
    baseOptions: '',
  };
  const filledState = {
    modifierOptions: 'adjective',
    baseOptions: 'noun',
  };
  test('returns the initial state', () => {
    expect(setOptionsState(undefined, {})).toEqual(initialState);
  });

  test('handles setting modifier options', () => {
    const action = {
      type: 'MODIFIER_OPTIONS_SET',
      modifierOptions: 'adjective',
    };
    const expectedState = {
      ...initialState,
      modifierOptions: 'adjective',
    };
    const outputState = setOptionsState(initialState, action);
    expect(outputState).toEqual(expectedState);
  });
  test('handles setting base options', () => {
    const action = {
      type: 'BASE_OPTIONS_SET',
      baseOptions: 'noun',
    };
    const expectedState = {
      ...initialState,
      baseOptions: 'noun',
    };
    const outputState = setOptionsState(initialState, action);
    expect(outputState).toEqual(expectedState);
  });
  test('handles clearing modifier options', () => {
    const action = {
      type: 'MODIFIER_OPTIONS_CLEAR',
    };
    const expectedState = {
      ...filledState,
      modifierOptions: '',
    };
    const outputState = setOptionsState(filledState, action);
    expect(outputState).toEqual(expectedState);
  });
  test('handles clearing base options', () => {
    const action = {
      type: 'BASE_OPTIONS_CLEAR',
    };
    const expectedState = {
      ...filledState,
      baseOptions: '',
    };
    const outputState = setOptionsState(filledState, action);
    expect(outputState).toEqual(expectedState);
  });
});
