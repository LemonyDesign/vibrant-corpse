import React from 'react';
import '../styles/components/word.scss';
import PropTypes from 'prop-types';

function Word({ modifier, baseword }) {
  return (
    <li>
      <span className="modifier__items" modifiers={modifier}>
        {modifier}
      </span>
      <span className="baseword__items" basewords={baseword}>
        {baseword}
      </span>
    </li>
  );
}

Word.propTypes = {
  modifier: PropTypes.string,
  baseword: PropTypes.string,
};

Word.defaultProps = {
  modifier: '',
  baseword: '',
};

export default Word;
