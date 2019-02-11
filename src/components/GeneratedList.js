import React from "react";
import WordCombination from "./WordCombination";
import cx from "classnames";

import "../styles/components/generatedList.scss";

function GeneratedList({
  modifiers,
  basewords,
  favourites,
  addFavourites,
  removeFromFavourites,
  displayWorkshop,
  isClicked,
  clicked,
  clearFetch
}) {
  const notEmpty = modifiers.length > 0 && basewords.length > 0;
  const sameLength = modifiers.length === basewords.length;

  const corpsesclasses = cx("corpses", {
    active: notEmpty && sameLength,
    "": !(notEmpty && sameLength)
  });

  const errorclass = cx("corpses__error", {
    show: clicked === true && favourites.length === 0
  });

  function handleClick(event) {
    isClicked();
    if (favourites.length !== 0) {
      displayWorkshop();
    }
  }
  function handleRegenerate(event) {
    clearFetch();
  }

  return (
    <section className={corpsesclasses}>
      <h2>Choose for Workshop</h2>
      <ul className="corpses__addlist  menu--settings">
        {notEmpty && sameLength
          ? modifiers.map((item, i) => {
              const modifier = item.word;
              const baseword = basewords[i].word;
              const modifierdef = item.definition;
              const baseworddef = basewords[i].definition;

              const corpseitem = `${item.word}  ${basewords[i].word}`;
              const isFavourite = favourites.find(currentFavourite => {
                return currentFavourite === corpseitem;
              });

              return (
                <WordCombination
                  modifier={modifier}
                  baseword={baseword}
                  modifierdef={modifierdef}
                  baseworddef={baseworddef}
                  corpseitem={corpseitem}
                  key={corpseitem}
                  isFavourite={isFavourite}
                  favourites={favourites}
                  addFavourites={addFavourites}
                  removeFromFavourites={removeFromFavourites}
                />
              );
            })
          : null}
      </ul>

      <button className="corpses__workshop" onClick={handleClick}>
        Start Workshopping <i className="fas fa-arrow-alt-circle-right" />
      </button>

      <button className="corpses__regenerate" onClick={handleRegenerate}>
        <span className="show--screenreaders">Regenerate</span>
        <i className="fas fa-redo" />
      </button>

      <p className={errorclass}>
        Please choose at least one vibrant corpse, or regenerate words.
      </p>
    </section>
  );
}

export default GeneratedList;
