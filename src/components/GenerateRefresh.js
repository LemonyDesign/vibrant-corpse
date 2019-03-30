import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Refresh from '@material-ui/icons/Refresh';
import '../styles/components/generateRefresh.scss';

function GeneratedRefresh({ handleRegenerate, started, favourites }) {
  const errorclass = cx('corpses__error', {
    show: started === true && favourites.length === 0,
  });

  return (
    <React.Fragment>
      <button
        type="button"
        className="corpses__regenerate"
        onClick={event => handleRegenerate(event)}
      >
        <span className="show--screenreaders">Regenerate</span>
        <Refresh />
      </button>
      <p className={errorclass}>Please choose at least one vibrant corpse.</p>
      <p>No inspirations? Regenerate</p>
    </React.Fragment>
  );
}

GeneratedRefresh.propTypes = {
  handleRegenerate: PropTypes.func.isRequired,
  started: PropTypes.bool.isRequired,
  favourites: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GeneratedRefresh;
