function setFavourites(state = [], action) {
  const newState = [...state];
  switch (action.type) {
    case 'FAVOURITES_ADD': {
      const newArray = newState.concat(action.favourites);
      return newArray;
      // alternative to the concat method: newArray.splice(action.index, 0, action.favourites);
    }
    case 'FAVOURITES_REMOVE':
      newState.splice(action.favourites, 1);
      return newState;
      // return state.filter(currentFavourite => currentFavourite !== action.favourites);
    default:
      return state;
  }
}

export default setFavourites;
