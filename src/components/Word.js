import React from "react";
import "../styles/components/app.scss";
import PropTypes from "prop-types";

function Word({ modifier, baseword }) {
  return (
    <li>
      <span className="noun__items" modifiers={modifier}>
        {modifier}
      </span>
      <span className="adjective__items" basewords={baseword}>
        {baseword}
      </span>
    </li>
  );
}

Word.propTypes = {
  modifierword: PropTypes.string,
  baseword: PropTypes.string
};

export default Word;
