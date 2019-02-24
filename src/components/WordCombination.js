import React from "react";
import "../styles/components/wordCombination.scss";
import PropTypes from "prop-types";
import cx from "classnames";
import { AddCircle, RemoveCircle, Info } from "@material-ui/icons";

function WordCombination({
  selectItem,
  deselectItem,
  corpseitem,
  isFavourite,
  modifier,
  baseword,
  modifierdef,
  baseworddef
}) {
  const linksclasses = cx("corpses__links", {
    active: isFavourite
  });

  return (
    <li className="corpses__items">
      <a
        className={linksclasses}
        href="#"
        onClick={event => {
          event.preventDefault();
          isFavourite ? deselectItem(corpseitem) : selectItem(corpseitem);
        }}
      >
        {isFavourite ? <RemoveCircle /> : <AddCircle />} {corpseitem}
      </a>

      <a className="tooltip" href="#">
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
