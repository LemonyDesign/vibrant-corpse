import addBaseWords from '../../src/reducers/addBaseWords';

describe('authenticate addBaseWords reducer', () => {
  const initialState = [];
  const filledState = [
    { word: 'one', definition: 'one defined' },
    { word: 'two', definition: 'two defined' },
    { word: 'three', definition: 'three defined' },
  ];

  test('returns the initial state', () => {
    expect(addBaseWords(undefined, {})).toEqual(initialState);
  });
  test('handles adding base words', () => {
    const action = {
      type: 'BASE_WORDS_ADD',
      baseWords: [
        { word: 'one', definition: 'one defined' },
        { word: 'two', definition: 'two defined' },
        { word: 'three', definition: 'three defined' },
      ],
    };
    const expectedState = [
      { word: 'one', definition: 'one defined' },
      { word: 'two', definition: 'two defined' },
      { word: 'three', definition: 'three defined' },
    ];
    const outputState = addBaseWords(initialState, action);
    expect(outputState).toEqual(expectedState);
  });
  test('handles clearing base words', () => {
    const action = {
      type: 'BASE_WORDS_CLEAR',
    };
    const expectedState = [];
    const outputState = addBaseWords(filledState, action);
    expect(outputState).toEqual(expectedState);
  });
});
