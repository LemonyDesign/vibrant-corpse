import isFetchingBasewords from '../../src/reducers/isFetchingBasewords';

describe('authenticate isFetchingBasewords reducer', () => {
  const initialState = {
    basewords: [],
    loadingBasewords: false,
    errorBasewords: '',
  };
  const addedBasewords = [
    { word: 'one', definition: 'one defined' },
    { word: 'two', definition: 'two defined' },
    { word: 'three', definition: 'three defined' },
  ];
  const mockErrorMessage = 'error';

  const filledState = {
    basewords: addedBasewords,
    loadingBasewords: false,
    errorBasewords: '',
  };

  test('returns the initial state', () => {
    expect(isFetchingBasewords(undefined, {})).toEqual(initialState);
  });

  test('handles basewords fetch request', () => {
    const action = {
      type: 'FETCH_BASEWORDS_REQUEST',
    };
    const expectedState = {
      ...initialState,
      loadingBasewords: true,
    };
    const outputState = isFetchingBasewords(initialState, action);
    expect(outputState).toEqual(expectedState);
  });

  test('handles basewords fetch success', () => {
    const action = {
      type: 'FETCH_BASEWORDS_SUCCESS',
      basewords: addedBasewords,
    };

    const expectedState = {
      ...initialState,
      basewords: addedBasewords,
    };

    const outputState = isFetchingBasewords(initialState, action);
    expect(outputState).toEqual(expectedState);
  });

  test('handles basewords fetch failure', () => {
    const action = {
      type: 'FETCH_BASEWORDS_FAILURE',
      errorBasewords: mockErrorMessage,
    };
    const expectedState = {
      ...initialState,
      errorBasewords: mockErrorMessage,
    };
    const outputState = isFetchingBasewords(initialState, action);
    expect(outputState).toEqual(expectedState);
  });

  test('handles clearing basewords', () => {
    const action = {
      type: 'BASEWORDS_CLEAR',
    };
    const expectedState = initialState;
    const outputState = isFetchingBasewords(filledState, action);
    expect(outputState).toEqual(expectedState);
  });
});
