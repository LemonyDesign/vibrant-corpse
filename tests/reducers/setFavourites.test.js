import setFavourites from '../../src/reducers/setFavourites';

describe('authenticate setFavourites reducer', () => {
  const initialState = [];
  const filledState = ['vibrant corpse', 'morose juggler'];

  test('returns the initial state', () => {
    expect(setFavourites(undefined, {})).toEqual(initialState);
  });
  test('handles adding favourites', () => {
    const action = {
      type: 'FAVOURITES_ADD',
      favourites: ['red donkey', 'frittered bag'],
    };
    const expectedState = ['red donkey', 'frittered bag'];
    const outputState = setFavourites(initialState, action);
    expect(outputState).toEqual(expectedState);
  });
  test('handles removing favourites', () => {
    const action = {
      type: 'FAVOURITES_REMOVE',
    };
    const expectedState = ['vibrant corpse'];
    const outputState = setFavourites(filledState, action);
    expect(outputState).toEqual(expectedState);
  });
});
