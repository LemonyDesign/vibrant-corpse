import React from "react";
import "../styles/components/app.scss";
import PropTypes from "prop-types";
import cx from "classnames";

function WordCombination({
  corpseitem,
  isFavourite,
  removeFromFavourites,
  addFavourites
}) {
  function handleClick(event) {
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
          <i className="fas fa-minus-circle" />
        ) : (
          <i className="fas fa-plus-circle" />
        )}{" "}
        {corpseitem}
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
