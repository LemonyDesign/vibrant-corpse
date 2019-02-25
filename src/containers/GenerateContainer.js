import { connect } from "react-redux";
import Generate from "../components/Generate.js";
import {
  fetchWords,
  setModifierOptions,
  setBaseOptions,
  clearModifierOptions,
  clearModifierWords,
  clearBaseOptions,
  clearBaseWords
} from "../actions";

export const mapStateToProps = state => {
  return {
    modifiers: state.addModifierWords,
    basewords: state.addBaseWords,
    modifierOptions: state.setOptionsState.modifierOptions,
    baseOptions: state.setOptionsState.baseOptions,
    workshop: state.setDisplayWorkshop
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleModifierOptions: () => {
      dispatch(setModifierOptions(event.target.value));
    },
    fetchModifier: () => {
      dispatch(fetchWords(event.target.value, event.target.name));
    },
    handleBaseOptions: () => {
      dispatch(setBaseOptions(event.target.value));
    },
    fetchBase: () => {
      dispatch(fetchWords(event.target.value, event.target.name));
    },
    clearModifiers: () => {
      dispatch(clearModifierWords());
      dispatch(clearModifierOptions());
    },
    clearBases: () => {
      dispatch(clearBaseWords());
      dispatch(clearBaseOptions());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Generate);
