import { connect } from "react-redux";
import Workshop from "../components/workshop";

const mapStateToProps = state => {
  return {
    workshop: state.setDisplayWorkshop,
    favourites: state.setFavourites
    // view: state.content.view
  };
};

export default connect(mapStateToProps)(Workshop);
