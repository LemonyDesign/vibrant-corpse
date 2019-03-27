import { connect } from 'react-redux';
import Generate from '../components/Generate';
import { fetchWords,
  setModifierOptions,
  setBaseOptions,
  clearModifierOptions,
  clearModifierWords,
  clearBaseOptions,
  clearBaseWords } from '../actions';

export const mapStateToProps = state => ({
  modifiers: state.addModifierWords,
  basewords: state.addBaseWords,
  modifierOptions: state.setOptionsState.modifierOptions,
  baseOptions: state.setOptionsState.baseOptions,
  workshop: state.setDisplayWorkshop,
});

const mapDispatchToProps = dispatch => ({
  handleModifierOptions: () => {
    dispatch(setModifierOptions(event.target.value));
  },
  fetchModifierWords: () => {
    dispatch(fetchWords(event.target.value, event.target.name));
  },
  clearModifiers: () => {
    dispatch(clearModifierWords());
    dispatch(clearModifierOptions());
  },
  handleBaseOptions: () => {
    dispatch(setBaseOptions(event.target.value));
  },
  fetchBaseWords: () => {
    dispatch(fetchWords(event.target.value, event.target.name));
  },
  clearBases: () => {
    dispatch(clearBaseWords());
    dispatch(clearBaseOptions());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Generate);
