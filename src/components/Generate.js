import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Word from './Word';
import FetchError from './FetchError';
import Loader from './Loader';
import GeneratedListContainer from '../containers/GeneratedListContainer';
import '../styles/components/generate.scss';

function Generate({
  modifiers,
  basewords,
  handleModifierOptions,
  fetchModifierWords,
  handleBaseOptions,
  fetchBaseWords,
  clearModifiers,
  clearBases,
  modifierOptions,
  baseOptions,
  workshop,
  errorModifiers,
  errorBasewords,
  modifiersLoading,
  basewordsLoading,
}) {
  const notEmpty = modifiers.length > 0 && basewords.length > 0;
  const sameLength = modifiers.length === basewords.length;

  const generateclass = cx('generate', {
    completed: notEmpty && sameLength,
    '': !(notEmpty && sameLength),
  });

  const wordlistclass = cx('wordlists', {
    conceal: workshop === true,
  });

  return (
    <React.Fragment>
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
                  onChange={event => {
                    handleModifierOptions(event);
                    event.target.value !== 'default'
                      ? fetchModifierWords(event)
                      : clearModifiers();
                  }}
                  name="modifier"
                >
                  <option value="default">Select</option>
                  <option value="adjective">Adjective</option>
                  <option value="adverb">Adverb</option>
                </select>
              </li>
              {modifiersLoading ? <Loader /> : null}
              {modifiers.map(modifier => (
                <Word key={modifier.word} modifier={modifier.word} />
              ))}
            </ul>
            <ul className="generate__base menu--settings">
              <li>
                <p>Noun / Verb</p>
                <select
                  value={baseOptions}
                  className="generator select2"
                  onChange={event => {
                    handleBaseOptions(event);
                    event.target.value !== 'default'
                      ? fetchBaseWords(event)
                      : clearBases();
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
              {basewordsLoading ? <Loader /> : null}
              {basewords.map(base => (
                <Word key={base.word} baseword={base.word} />
              ))}
            </ul>
          </div>
        </section>

        {errorModifiers || errorBasewords ? (
          <FetchError
            errorModifiers={errorModifiers}
            errorBasewords={errorBasewords}
            clearModifiers={clearModifiers}
            clearBases={clearBases}
          />
        ) : null}

        <GeneratedListContainer />
      </section>
    </React.Fragment>
  );
}

Generate.propTypes = {
  modifiers: PropTypes.arrayOf(PropTypes.object).isRequired,
  errorModifiers: PropTypes.string.isRequired,
  modifiersLoading: PropTypes.bool.isRequired,
  basewords: PropTypes.arrayOf(PropTypes.object).isRequired,
  errorBasewords: PropTypes.string.isRequired,
  basewordsLoading: PropTypes.bool.isRequired,
  handleModifierOptions: PropTypes.func.isRequired,
  fetchModifierWords: PropTypes.func.isRequired,
  handleBaseOptions: PropTypes.func.isRequired,
  fetchBaseWords: PropTypes.func.isRequired,
  clearModifiers: PropTypes.func.isRequired,
  clearBases: PropTypes.func.isRequired,
  modifierOptions: PropTypes.string.isRequired,
  baseOptions: PropTypes.string.isRequired,
  workshop: PropTypes.bool.isRequired,
};

export default Generate;
