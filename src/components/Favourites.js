import React from "react";
import Favourite from "./Favourite";
import "../styles/components/favourites.scss";

function Favourites({ favourites }) {
  return (
    <section className="workshop">
      <h2>Workshop</h2>
      <ol>
        <li>
          <strong>Generate</strong> nouns and adjectives to create a list of
          &lsquo;exquisite corpses&rsquo;
        </li>
        <li>
          <i className="fas fa-plus-circle" /> appealing exquisite corpses to
          the workshop area
        </li>
        <li>
          <strong>Select</strong> a corpse to start the timer and begin writing.
          Do not pause.
        </li>
      </ol>
      <ul className="workshop__favourites menu--settings">
        {favourites.map(favourite => (
          <Favourite favourite={favourite} key={favourite} />
        ))}
      </ul>
      <textarea className="workshop__textarea" />
    </section>
  );
}

export default Favourites;
