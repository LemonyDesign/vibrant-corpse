import { connect } from 'react-redux';
import Workshop from '../components/Workshop';

const mapStateToProps = state => ({
  workshop: state.setDisplayWorkshop,
  favourites: state.setFavourites,
});

export default connect(mapStateToProps)(Workshop);
