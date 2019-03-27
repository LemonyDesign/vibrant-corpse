import React from 'react';
import '../styles/components/wordCombination.scss';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { AddCircle, RemoveCircle, Info } from '@material-ui/icons';

function WordCombination({
  selectItem,
  deselectItem,
  corpseitem,
  isFavourite,
  modifier,
  baseword,
  modifierdef,
  baseworddef,
}) {
  const linksclasses = cx('corpses__links', {
    active: isFavourite,
  });

  return (
    <li className="corpses__items">
      <button
        type="button"
        className={linksclasses}
        onClick={(event) => {
          event.preventDefault();
          isFavourite ? deselectItem(corpseitem) : selectItem(corpseitem);
        }}
      >
        {isFavourite ? <RemoveCircle /> : <AddCircle />}
        {' '}
        {corpseitem}
      </button>

      {/* TODO: build accessible tooltip button */}
      <a className="tooltip" href="#">
        <Info />
        <span className="tooltip-content">
          <span className="tooltip-text">
            <span className="tooltip-inner">
              <span className="wd">{modifier}</span>
              {' '}
              {modifierdef}
              <br />
              <span className="wd">{baseword}</span>
              {' '}
              {baseworddef}
            </span>
          </span>
        </span>
      </a>
    </li>
  );
}

WordCombination.propTypes = {
  selectItem: PropTypes.func.isRequired,
  deselectItem: PropTypes.func.isRequired,
  corpseitem: PropTypes.string.isRequired,
  isFavourite: PropTypes.func.isRequired,
  modifier: PropTypes.string.isRequired,
  baseword: PropTypes.string.isRequired,
  modifierdef: PropTypes.string.isRequired,
  baseworddef: PropTypes.string.isRequired,
};

export default WordCombination;
