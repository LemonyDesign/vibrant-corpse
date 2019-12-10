export const addFavourites = favourites => ({
  type: 'FAVOURITES_ADD',
  favourites,
});

export const removeFromFavourites = favourites => ({
  type: 'FAVOURITES_REMOVE',
  favourites,
});
