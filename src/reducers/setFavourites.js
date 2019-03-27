function setFavourites(state = [], action) {
  switch (action.type) {
    case 'FAVOURITES_ADD':
      const newArray = [...state].concat(action.favourites);
      return newArray;

      // alternative to the concat method: newArray.splice(action.index, 0, action.favourites);

    case 'FAVOURITES_REMOVE':
      return state.filter(currentFavourite => currentFavourite !== action.favourites);
    default:
      return state;
  }
}

export default setFavourites;
