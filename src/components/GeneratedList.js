import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import WordCombinationContainer from '../containers/WordCombinationContainer';
import GenerateRefresh from './GenerateRefresh';
import GoWorkshop from './GoWorkshop';
import '../styles/components/generatedList.scss';

function GeneratedList({
  goWorkshop,
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
            const corpseitem = `${item.word}  ${basewords[i].word}`;

            const isFavourite = favourites.find(
              currentFavourite => currentFavourite === corpseitem,
            );

            return (
              <WordCombinationContainer
                modifier={item}
                baseword={basewords[i]}
                corpseitem={corpseitem}
                key={corpseitem}
                isFavourite={isFavourite}
              />
            );
          })
          : null}
      </ul>

      <GoWorkshop
        goWorkshop={goWorkshop}
        displayWorkshop={displayWorkshop}
        favourites={favourites}
      />
      <GenerateRefresh
        handleRegenerate={handleRegenerate}
        started={started}
        favourites={favourites}
      />
    </section>
  );
}

GeneratedList.propTypes = {
  goWorkshop: PropTypes.func.isRequired,
  displayWorkshop: PropTypes.func.isRequired,
  handleRegenerate: PropTypes.func.isRequired,
  modifiers: PropTypes.arrayOf(PropTypes.object).isRequired,
  basewords: PropTypes.arrayOf(PropTypes.object).isRequired,
  started: PropTypes.bool.isRequired,
  favourites: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GeneratedList;
