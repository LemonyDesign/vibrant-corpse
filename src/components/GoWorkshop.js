import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/goWorkshop.scss';

function GoWorkshop({ goWorkshop, displayWorkshop, favourites }) {
  return (
    <button
      type="button"
      className="corpses__workshop"
      onClick={(event) => {
        event.preventDefault();
        goWorkshop();
        if (favourites.length !== 0) {
          return displayWorkshop();
        }
        return null;
      }}
    >
      Start Workshopping
    </button>
  );
}

GoWorkshop.propTypes = {
  goWorkshop: PropTypes.func.isRequired,
  displayWorkshop: PropTypes.func.isRequired,
  favourites: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GoWorkshop;
