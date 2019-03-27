import React from 'react';
import PropTypes from 'prop-types';
import Masthead from './Masthead';
import GenerateContainer from '../containers/GenerateContainer';
import WorkshopContainer from '../containers/WorkshopContainer';

import '../styles/base/base.scss';
import '../styles/components/app.scss';

function Content({ workshop }) {
  return (
    <div className="app container">
      <Masthead />

      <main className="main">
        <GenerateContainer />
        {workshop && <WorkshopContainer />}
      </main>
    </div>
  );
}

Content.propTypes = {
  workshop: PropTypes.bool.isRequired,
};

export default Content;
