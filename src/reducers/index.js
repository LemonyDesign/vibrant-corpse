import { combineReducers } from 'redux';

import setOptionsState from './setOptionsState';
import setStartWorkshop from './setStartWorkshop';
import setDisplayWorkshop from './setDisplayWorkshop';
import setFavourites from './setFavourites';
import isFetchingModifiers from './isFetchingModifiers';
import isFetchingBasewords from './isFetchingBasewords';

export default combineReducers({
  setOptionsState,
  setStartWorkshop,
  setDisplayWorkshop,
  setFavourites,
  isFetchingModifiers,
  isFetchingBasewords,
});
