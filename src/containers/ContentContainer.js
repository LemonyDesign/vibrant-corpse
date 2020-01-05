import { connect } from 'react-redux';
import Content from '../components/Content';

const mapStateToProps = state => ({
  workshop: state.setDisplayWorkshop,
});

export default connect(mapStateToProps)(Content);
