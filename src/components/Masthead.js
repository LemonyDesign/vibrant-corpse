import React from 'react';
import '../styles/base/base.scss';
import '../styles/components/masthead.scss';

function Masthead() {
  return (
    <header className="masthead">
      <h1 className="masthead__title">Vibrant Corpse</h1>
      <div className="masthead__description">
        <p>
          Vibrant corpse (
          <em>cadavre exquis</em>
          {' '}
in French) is a game invented by the Surrealists
          aimed at stimulating creative response. The method involves the assemblage of generated
          words or images, according to an agreed rule. This game seeks to mimic the original by
          randomly generating word lists then combining the results to create intriguing
          combinations that may be chosen for &lsquo;workshopping&rsquo; – 5 minutes of free-flow
          writing.
        </p>
      </div>
    </header>
  );
}

export default Masthead;
