import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Favourite from './Favourite';
import '../styles/components/workshop.scss';

function Workshop({ favourites, workshop }) {
  const workshopclass = cx('workshop', {
    reveal: workshop === true,
  });

  return (
    <section className={workshopclass}>
      <h2>Workshop</h2>
      <p>Select a corpse to start the timer and begin writing. Do not pause.</p>

      <ul className="workshop__favourites menu--settings">
        {favourites.map(favourite => (
          <Favourite favourite={favourite} key={favourite} />
        ))}
      </ul>
      <textarea className="workshop__textarea" />
    </section>
  );
}

Workshop.propTypes = {
  favourites: PropTypes.arrayOf(PropTypes.string).isRequired,
  workshop: PropTypes.bool.isRequired,
};

export default Workshop;
