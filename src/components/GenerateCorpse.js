import React from "react";
import WordCombination from "./WordCombination";
import cx from "classnames";

import "../styles/components/generate.scss";

function GenerateCorpse({
  modifiers,
  basewords,
  favourites,
  addFavourites,
  removeFromFavourites
}) {
  const notEmpty = modifiers.length > 0 && basewords.length > 0;
  const sameLength = modifiers.length === basewords.length;

  const corpsesclasses = cx("generate__corpses menu--settings", {
    active: notEmpty && sameLength,
    "": !(notEmpty && sameLength)
  });

  return (
    <ul className={corpsesclasses}>
      <li>
        <h4>Add for Workshopping</h4>
      </li>

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
  );
}

export default GenerateCorpse;
