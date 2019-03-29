import { connect } from 'react-redux';
import WordCombination from '../components/WordCombination';
import { addFavourites, removeFromFavourites } from '../actions';

const mapStateToProps = (state, ownProps) => ({
  modifier: {
    modWord: ownProps.modifier.word,
    modDefinition: ownProps.modifier.definition,
  },
  baseword: {
    baseWord: ownProps.baseword.word,
    baseDefinition: ownProps.baseword.definition,
  },
  corpseitem: ownProps.corpseitem,
  key: ownProps.corpseitem,
  isFavourite: ownProps.isFavourite,
  favourites: state.setFavourites,
});

const mapDispatchToProps = dispatch => ({
  selectItem: corpseitem => dispatch(addFavourites(corpseitem)),
  deselectItem: corpseitem => dispatch(removeFromFavourites(corpseitem)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WordCombination);
