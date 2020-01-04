import { combineReducers } from 'redux';

import setOptionsState from './setOptionsState';
import setStartWorkshop from './setStartWorkshop';
import setDisplayWorkshop from './setDisplayWorkshop';
import setFavourites from './setFavourites';
import isFetchingModifiers from './isFetchingModifiers';
import isFetchingBasewords from './isFetchingBasewords';
import isRegistered from './isRegistered';
import registerForm from './registerForm';

export default combineReducers({
  setOptionsState,
  setStartWorkshop,
  setDisplayWorkshop,
  setFavourites,
  isFetchingModifiers,
  isFetchingBasewords,
  isRegistered,
  registerForm,
});
