import { combineReducers } from "redux";
import addModifierWords from "./addModifierWords";
import addBaseWords from "./addBaseWords";
import setOptionsState from "./setOptionsState";
import setStartWorkshop from "./setStartWorkshop";
import setDisplayWorkshop from "./setDisplayWorkshop";
import setFavourites from "./setFavourites";

export default combineReducers({
  addModifierWords,
  addBaseWords,
  setOptionsState,
  setStartWorkshop,
  setDisplayWorkshop,
  setFavourites
});
