import React from "react";
import Favourite from "./Favourite";
import "../styles/components/favourites.scss";

function Favourites({ favourites }) {
  return (
    <section className="workshop">
      <h2>Workshop</h2>
      <p>Select a corpse to start the timer and begin writing. Do not pause.</p>

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
