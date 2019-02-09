import React from "react";
import WordCombination from "./WordCombination";
import cx from "classnames";

import "../styles/components/generateCorpse.scss";

function GenerateCorpse({
  modifiers,
  basewords,
  favourites,
  addFavourites,
  removeFromFavourites,
  displayWorkshop,
  workshop
}) {
  const notEmpty = modifiers.length > 0 && basewords.length > 0;
  const sameLength = modifiers.length === basewords.length;

  const corpsesclasses = cx("corpses", {
    active: notEmpty && sameLength,
    "": !(notEmpty && sameLength)
  });

  function handleClick(event) {
    displayWorkshop();
  }

  return (
    <section className={corpsesclasses}>
      <h4>Select for Workshop</h4>
      <ul className="corpses__addlist  menu--settings">
        {notEmpty && sameLength
          ? modifiers.map((item, i) => {
              const corpseitem = `${item} ${basewords[i]}`;
              const isFavourite = favourites.find(currentFavourite => {
                return currentFavourite === corpseitem;
              });

              return (
                <WordCombination
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
        Get Workshopping <i className="fas fa-arrow-alt-circle-right" />
      </button>
    </section>
  );
}

export default GenerateCorpse;
