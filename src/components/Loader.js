import React from 'react';
import '../styles/components/loader.scss';

function Loader() {
  return (
    <li>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </li>
  );
}

export default Loader;
