import React from "react";
import GenerateCorpse from "./GenerateCorpse";
import Word from "./Word";

import "../styles/components/generate.scss";

function Generate({
  receiveType,
  modifiers,
  basewords,
  favourites,
  addFavourites,
  removeFromFavourites,
  displayWorkshop,
  workshop
}) {
  function handleChange1(event) {
    receiveType(event.target.value, "modifier");
  }
  function handleChange2(event) {
    receiveType(event.target.value, "base");
  }

  return (
    <section className="wordlists">
      <h2 className="wordlists__title">Vibrant Corpse Generator</h2>

      <ol>
        <li>
          <strong>Generate</strong> adjectives &amp; nouns OR adverbs &amp;
          verbs to create a list of &lsquo;vibrant corpses&rsquo; by selecting
          below.
        </li>
        <li>
          <strong>Choose</strong> appealing vibrant corpses for workshopping
        </li>
        <li>Made your selections? Enter the workshop.</li>
      </ol>

      <section className="generate">
        <ul className="generate__modifier menu--settings">
          <li>
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

      <GenerateCorpse
        modifiers={modifiers}
        basewords={basewords}
        favourites={favourites}
        addFavourites={addFavourites}
        removeFromFavourites={removeFromFavourites}
        displayWorkshop={displayWorkshop}
        workshop={workshop}
      />
    </section>
  );
}

export default Generate;
