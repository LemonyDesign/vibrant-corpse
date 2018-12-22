import React from "react";
import "../styles/components/app.scss";
import PropTypes from "prop-types";

function Word({ modifier, base }) {
  return (
    <li>
      <span className="noun__items" modifiers={modifier}>
        {modifier}
      </span>
      <span className="adjective__items" basewords={base}>
        {base}
      </span>
    </li>
  );
}

Word.propTypes = {
  modifier: PropTypes.string,
  base: PropTypes.string
};

export default Word;
