import React from 'react';
import '../styles/components/tooltip.scss';
import PropTypes from 'prop-types';
import { Info } from '@material-ui/icons';

function Tooltip({ modifier, baseword }) {
  const { modWord, modDefinition } = modifier;
  const { baseWord, baseDefinition } = baseword;

  return (
    <a className="tooltip" href="#">
      <Info />
      <span className="tooltip-content">
        <span className="tooltip-text">
          <span className="tooltip-inner">
            <span className="wd">{modWord}</span>
            {modDefinition}
            <br />
            <span className="wd">{baseWord}</span>
            {baseDefinition}
          </span>
        </span>
      </span>
    </a>
  );
}

Tooltip.propTypes = {
  modifier: PropTypes.objectOf(PropTypes.string).isRequired,
  baseword: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Tooltip;
