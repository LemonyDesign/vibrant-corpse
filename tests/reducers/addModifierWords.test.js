import addModifierWords from '../../src/reducers/addModifierWords';

describe('authenticate addModifierWords reducer', () => {
  const initialState = [];
  const filledState = [
    { word: 'one', definition: 'one defined' },
    { word: 'two', definition: 'two defined' },
    { word: 'three', definition: 'three defined' },
  ];
  test('returns the initial state', () => {
    expect(addModifierWords(undefined, {})).toEqual(initialState);
  });

  test('handles adding modifier words', () => {
    const action = {
      type: 'MODIFIER_WORDS_ADD',
      modifierWords: [
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
    const outputState = addModifierWords(initialState, action);
    expect(outputState).toEqual(expectedState);
  });
  test('handles clearing modifier words', () => {
    const action = {
      type: 'MODIFIER_WORDS_CLEAR',
    };
    const expectedState = [];
    const outputState = addModifierWords(filledState, action);
    expect(outputState).toEqual(expectedState);
  });
});
