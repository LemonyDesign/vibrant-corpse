import React from "react";
import GeneratedList from "./GeneratedList";
import Word from "./Word";
import cx from "classnames";

import "../styles/components/generate.scss";

function Generate({
  receiveType,
  modifiers,
  basewords,
  receiveModifierOption,
  receiveBaseOption,
  modifierOptions,
  baseOptions,
  clearFetch,
  startWorkshop,
  started,
  displayWorkshop,
  workshop,
  favourites,
  addFavourites,
  removeFromFavourites
}) {
  function handleChange1(event) {
    receiveType(event.target.value, "modifier");
    receiveModifierOption(event.target.value);
  }
  function handleChange2(event) {
    receiveType(event.target.value, "base");
    receiveBaseOption(event.target.value);
  }

  const notEmpty = modifiers.length > 0 && basewords.length > 0;
  const sameLength = modifiers.length === basewords.length;

  const generateclass = cx("generate", {
    completed: notEmpty && sameLength,
    "": !(notEmpty && sameLength)
  });

  const wordlistclass = cx("wordlists", {
    conceal: workshop === true
  });

  return (
    <section className={wordlistclass}>
      <section className={generateclass}>
        <h2 className="wordlists__title">The Generator</h2>

        <p className="wordlists__intro">
          <strong>Generate</strong> words to create a list of &lsquo;vibrant
          corpses&rsquo; by selecting below.
        </p>
        <div className="generate__generator">
          <ul className="generate__modifier menu--settings">
            <li>
              <p>Adjective / Adverb</p>
              <select
                value={modifierOptions}
                className="generator select1"
                onChange={handleChange1}
              >
                <option value="default">Select</option>
                <option value="adjective">Adjective</option>
                <option value="adverb">Adverb</option>
              </select>
            </li>

            {modifiers.map(modifier => {
              return <Word key={modifier.word} modifier={modifier.word} />;
            })}
          </ul>
          <ul className="generate__base menu--settings">
            <li>
              <p>Noun / Verb</p>
              <select
                value={baseOptions}
                className="generator select2"
                onChange={handleChange2}
              >
                <option default value="default">
                  Select
                </option>
                <option value="noun">Noun</option>
                <option value="verb">Verb</option>
              </select>
            </li>
            {basewords.map(base => {
              return <Word key={base.word} baseword={base.word} />;
            })}
          </ul>
        </div>
      </section>

      <GeneratedList
        modifiers={modifiers}
        basewords={basewords}
        clearFetch={clearFetch}
        startWorkshop={startWorkshop}
        started={started}
        displayWorkshop={displayWorkshop}
        favourites={favourites}
        addFavourites={addFavourites}
        removeFromFavourites={removeFromFavourites}
      />
    </section>
  );
}

export default Generate;
