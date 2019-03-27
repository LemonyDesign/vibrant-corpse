import { connect } from 'react-redux';
import Workshop from '../components/Workshop';

const mapStateToProps = state => ({
  workshop: state.setDisplayWorkshop,
  favourites: state.setFavourites,
  // view: state.content.view
});

export default connect(mapStateToProps)(Workshop);
