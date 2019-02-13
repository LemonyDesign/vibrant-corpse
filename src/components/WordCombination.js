import React from "react";
import "../styles/components/wordCombination.scss";
import PropTypes from "prop-types";
import cx from "classnames";
import { FaQuestionCircle, FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { AddCircle, RemoveCircle, Info } from "@material-ui/icons";

function WordCombination({
  corpseitem,
  modifier,
  baseword,
  modifierdef,
  baseworddef,
  isFavourite,
  removeFromFavourites,
  addFavourites
}) {
  function handleClick() {
    if (isFavourite) {
      removeFromFavourites(corpseitem);
    } else {
      addFavourites(corpseitem);
    }
  }
  const linksclasses = cx("corpses__links", {
    active: isFavourite
  });

  return (
    <li className="corpses__items" corpseitem={corpseitem}>
      <a className={linksclasses} href="#" onClick={handleClick}>
        {isFavourite ? (
          // <i className="fas fa-minus-circle" />
          // <FaMinusCircle />
          <RemoveCircle />
        ) : (
          // <i className="fas fa-plus-circle" />
          // <FaPlusCircle />
          <AddCircle />
        )}{" "}
        {corpseitem}
      </a>

      <a className="tooltip" href="#">
        {/* <i className="fa fa-question-circle" /> */}
        {/* <FaQuestionCircle /> */}
        <Info />
        <span className="tooltip-content">
          <span className="tooltip-text">
            <span className="tooltip-inner">
              <span className="wd">{modifier}</span> {modifierdef}
              <br />
              <span className="wd">{baseword}</span> {baseworddef}
            </span>
          </span>
        </span>
      </a>
    </li>
  );
}

WordCombination.propTypes = {
  corpseitem: PropTypes.string,
  removeFromFavourites: PropTypes.func,
  addFavourites: PropTypes.func
};

export default WordCombination;
