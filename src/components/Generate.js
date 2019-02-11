import React from "react";
import GeneratedList from "./GeneratedList";
import Word from "./Word";
import cx from "classnames";

import "../styles/components/generate.scss";

function Generate({
  receiveType,
  modifiers,
  basewords,
  favourites,
  addFavourites,
  removeFromFavourites,
  displayWorkshop,
  workshop,
  isClicked,
  clicked,
  clearFetch
}) {
  function handleChange1(event) {
    receiveType(event.target.value, "modifier");
  }
  function handleChange2(event) {
    receiveType(event.target.value, "base");
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
      <h2 className="wordlists__title">The Generator</h2>

      <ol className="wordlists__intro">
        <li>
          <strong>Generate</strong> words to create a list of &lsquo;vibrant
          corpses&rsquo; by selecting below.
        </li>
        <li>
          <strong>Choose</strong> vibrant corpses for workshopping.
        </li>
        <li>
          <strong>Start a workshop.</strong>{" "}
        </li>
      </ol>

      <section className={generateclass}>
        <ul className="generate__modifier menu--settings">
          <li>
            <p>Adjective / Adverb</p>
            <select className="generator select1" onChange={handleChange1}>
              <option default value="default">
                Select
              </option>
              <option value="adjective">Adjective</option>
              <option value="adverb">Adverb</option>
            </select>
          </li>
          {modifiers.map(modifier => {
            return <Word key={modifier} modifier={modifier} />;
          })}
        </ul>
        <ul className="generate__base menu--settings">
          <li>
            <p>Noun / Verb</p>
            <select className="generator select2" onChange={handleChange2}>
              <option default value="default">
                Select
              </option>
              <option value="noun">Noun</option>
              <option value="verb">Verb</option>
            </select>
          </li>
          {basewords.map(base => {
            return <Word key={base} base={base} />;
          })}
        </ul>
      </section>

      <GeneratedList
        modifiers={modifiers}
        basewords={basewords}
        favourites={favourites}
        addFavourites={addFavourites}
        removeFromFavourites={removeFromFavourites}
        displayWorkshop={displayWorkshop}
        isClicked={isClicked}
        clicked={clicked}
        clearFetch={clearFetch}
      />
    </section>
  );
}

export default Generate;
