import { connect } from 'react-redux';
import Content from '../components/Content';

const mapStateToProps = state => ({
  workshop: state.setDisplayWorkshop,
  // view: state.content.view
});

export default connect(mapStateToProps)(Content);
