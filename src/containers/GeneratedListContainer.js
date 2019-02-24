import { connect } from "react-redux";
import GeneratedList from "../components/GeneratedList.js";
import {
  startWorkshop,
  displayWorkshop,
  clearModifierWords,
  clearBaseWords,
  clearModifierOptions,
  clearBaseOptions
} from "../actions";

export const mapStateToProps = state => {
  return {
    modifiers: state.addModifierWords,
    basewords: state.addBaseWords,
    modifierOptions: state.setOptionsState.modifierOptions,
    baseOptions: state.setOptionsState.baseOptions,
    started: state.setStartWorkshop,
    favourites: state.setFavourites
  };
};

const mapDispatchToProps = dispatch => {
  return {
    startWorkshop: () => dispatch(startWorkshop()),
    displayWorkshop: () => dispatch(displayWorkshop()),

    handleRegenerate: event => {
      event.preventDefault();
      dispatch(clearModifierWords());
      dispatch(clearBaseWords());
      dispatch(clearModifierOptions());
      dispatch(clearBaseOptions());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GeneratedList);
