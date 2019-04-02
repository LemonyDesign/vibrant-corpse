import React from 'react';
import '../styles/components/wordCombination.scss';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { AddCircle, RemoveCircle } from '@material-ui/icons';
import Tooltip from './Tooltip';

function WordCombination({
  selectItem,
  deselectItem,
  corpseitem,
  isFavourite,
  modifier,
  baseword,
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

      <Tooltip modifier={modifier} baseword={baseword} />
    </li>
  );
}

WordCombination.propTypes = {
  selectItem: PropTypes.func.isRequired,
  deselectItem: PropTypes.func.isRequired,
  corpseitem: PropTypes.string.isRequired,
  isFavourite: PropTypes.string,
  modifier: PropTypes.objectOf(PropTypes.string).isRequired,
  baseword: PropTypes.objectOf(PropTypes.string).isRequired,
};

WordCombination.defaultProps = {
  isFavourite: '',
};

export default WordCombination;
