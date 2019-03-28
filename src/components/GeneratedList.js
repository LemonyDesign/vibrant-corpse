import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Refresh from '@material-ui/icons/Refresh';
import WordCombinationContainer from '../containers/WordCombinationContainer';
import '../styles/components/generatedList.scss';

function GeneratedList({
  startWorkshop,
  displayWorkshop,
  handleRegenerate,
  modifiers,
  basewords,
  started,
  favourites,
}) {
  const notEmpty = modifiers.length > 0 && basewords.length > 0;
  const sameLength = modifiers.length === basewords.length;

  const corpsesclasses = cx('corpses', {
    active: notEmpty && sameLength,
    '': !(notEmpty && sameLength),
  });

  const errorclass = cx('corpses__error', {
    show: started === true && favourites.length === 0,
  });

  return (
    <section className={corpsesclasses}>
      <h2>Choose for Workshop</h2>
      <p className="corpses__intro">
        <strong>Add</strong>
        {' '}
intriguing &lsquo;vibrant corpses&rsquo; for workshopping.
      </p>
      <ul className="corpses__addlist  menu--settings">
        {notEmpty && sameLength
          ? modifiers.map((item, i) => {
            const modifier = item.word;
            const baseword = basewords[i].word;
            const modifierdef = item.definition;
            const baseworddef = basewords[i].definition;
            const corpseitem = `${item.word}  ${basewords[i].word}`;

            const isFavourite = favourites.find(
              currentFavourite => currentFavourite === corpseitem,
            );

            return (
              <WordCombinationContainer
                modifier={modifier}
                baseword={baseword}
                modifierdef={modifierdef}
                baseworddef={baseworddef}
                corpseitem={corpseitem}
                key={corpseitem}
                isFavourite={isFavourite}
              />
            );
          })
          : null}
      </ul>

      <button
        type="button"
        className="corpses__workshop"
        onClick={(event) => {
          event.preventDefault();
          startWorkshop();
          favourites.length !== 0 ? displayWorkshop() : null;
        }}
      >
        Start Workshopping
      </button>

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
    </section>
  );
}

GeneratedList.propTypes = {
  startWorkshop: PropTypes.func.isRequired,
  displayWorkshop: PropTypes.func.isRequired,
  handleRegenerate: PropTypes.func.isRequired,
  modifiers: PropTypes.arrayOf(PropTypes.object).isRequired,
  basewords: PropTypes.arrayOf(PropTypes.object).isRequired,
  started: PropTypes.bool.isRequired,
  favourites: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GeneratedList;
