import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/base/base.scss';
import '../styles/components/hero.scss';

function Hero() {
  return (
    <div className="hero">
      <p className="hero__content">
        Vibrant corpse (<em>cadavre exquis</em> in French) is a game invented by
        the Surrealists aimed at stimulating creative response. The method
        involves the assemblage of generated words or images, according to an
        agreed rule. This game seeks to mimic the original by randomly
        generating word lists then combining the results to create intriguing
        combinations that may be chosen for &lsquo;workshopping&rsquo; – 5
        minutes of free-flow writing.
      </p>
      <Link to="/generate" className="btn btn--primary">
        Generate
      </Link>
    </div>
  );
}

export default Hero;
