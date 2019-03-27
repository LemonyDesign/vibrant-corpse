import { connect } from 'react-redux';
import WordCombination from '../components/WordCombination';
import { addFavourites, removeFromFavourites } from '../actions';

const mapStateToProps = (state, ownProps) => ({
  modifier: ownProps.modifier,
  baseword: ownProps.baseword,
  modifierdef: ownProps.modifierdef,
  baseworddef: ownProps.baseworddef,
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
