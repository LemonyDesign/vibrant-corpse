import { connect } from "react-redux";
import Content from "../components/Content";

const mapStateToProps = state => {
  return {
    workshop: state.setDisplayWorkshop
    // view: state.content.view
  };
};

export default connect(mapStateToProps)(Content);
