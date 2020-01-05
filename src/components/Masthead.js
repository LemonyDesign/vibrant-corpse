import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/base/base.scss';
import '../styles/components/masthead.scss';

function Masthead() {
  return (
    <>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>

      <header className="masthead">
        <Link to="/">
          <h1 className="masthead__title">Vibrant Corpse</h1>
        </Link>
      </header>
    </>
  );
}

export default Masthead;
