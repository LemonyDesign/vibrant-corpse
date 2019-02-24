import { connect } from "react-redux";
import Generate from "../components/Generate.js";
import { fetchWords, setModifierOptions, setBaseOptions } from "../actions";

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
    handleChange: event => {
      dispatch(fetchWords(event.target.value, event.target.name));
      if (event.target.name === "modifier") {
        dispatch(setModifierOptions(event.target.value));
      }
      if (event.target.name === "base") {
        dispatch(setBaseOptions(event.target.value));
      }
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Generate);
