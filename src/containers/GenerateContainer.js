import { connect } from 'react-redux';
import Generate from '../components/Generate';
// eslint-disable-next-line object-curly-newline
import {
  // fetchWords,
  fetchModifierWords,
  fetchBasewords,
  setModifierOptions,
  setBaseOptions,
  clearModifierOptions,
  clearModifierWords,
  clearBaseOptions,
  clearBaseWords,
  // eslint-disable-next-line object-curly-newline
} from '../actions';

export const mapStateToProps = state => ({
  modifierOptions: state.setOptionsState.modifierOptions,
  baseOptions: state.setOptionsState.baseOptions,
  modifiers: state.isFetchingModifiers.modifiers,
  errorModifiers: state.isFetchingModifiers.errorModifiers,
  modifiersLoading: state.isFetchingModifiers.loadingModifiers,
  basewords: state.isFetchingBasewords.basewords,
  errorBasewords: state.isFetchingBasewords.errorBasewords,
  basewordsLoading: state.isFetchingBasewords.loadingBasewords,
  workshop: state.setDisplayWorkshop,
});

const mapDispatchToProps = dispatch => ({
  handleModifierOptions: event => {
    dispatch(setModifierOptions(event.target.value));
  },
  fetchModifierWords: event => {
    dispatch(fetchModifierWords(event.target.value));
  },
  clearModifiers: () => {
    dispatch(clearModifierWords());
    dispatch(clearModifierOptions());
  },
  handleBaseOptions: event => {
    dispatch(setBaseOptions(event.target.value));
  },
  fetchBaseWords: event => {
    dispatch(fetchBasewords(event.target.value, event.target.name));
  },
  clearBases: () => {
    dispatch(clearBaseWords());
    dispatch(clearBaseOptions());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Generate);
