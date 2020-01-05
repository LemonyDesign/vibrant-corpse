import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/components/goWorkshop.scss';

function GoWorkshop({ goWorkshop, favourites }) {
  const history = useHistory();

  function redirectToWorkshop() {
    history.push('/workshop');
  }

  return (
    <button
      type="button"
      className="corpses__workshop"
      onClick={event => {
        event.preventDefault();
        goWorkshop();
        if (favourites.length !== 0) {
          return redirectToWorkshop();
        }
        return null;
      }}
    >
      Enter Workshop
    </button>
  );
}

GoWorkshop.propTypes = {
  goWorkshop: PropTypes.func.isRequired,
  favourites: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GoWorkshop;
