import React from "react";
import Word from "./Word";
import GeneratedListContainer from "../containers/GeneratedListContainer";
import cx from "classnames";
import "../styles/components/generate.scss";

function Generate({
  modifiers,
  basewords,
  handleModifierOptions,
  fetchModifier,
  handleBaseOptions,
  fetchBase,
  clearModifiers,
  clearBases,
  modifierOptions,
  baseOptions,
  workshop
}) {
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
                onChange={() => {
                  handleModifierOptions();
                  modifierOptions !== "default"
                    ? fetchModifier()
                    : clearModifiers();
                }}
                name="modifier"
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
                onChange={() => {
                  handleBaseOptions();
                  baseOptions !== "default" ? fetchBase() : clearBases();
                }}
                name="base"
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
      <GeneratedListContainer />
    </section>
  );
}

export default Generate;
