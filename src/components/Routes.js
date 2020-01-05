import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Masthead from './Masthead';
import RegisterContainer from '../containers/RegisterContainer';
import GenerateContainer from '../containers/GenerateContainer';
import WorkshopContainer from '../containers/WorkshopContainer';

import '../styles/base/base.scss';
import '../styles/base/forms.scss';
import '../styles/components/app.scss';

function Routes() {
  return (
    <>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/generate">Generate</Link>
          </li>
        </ul>
      </nav> */}

      <Switch>
        <Route path="/register">
          <RegisterContainer />
        </Route>
        <Route path="/generate">
          <GenerateContainer />
        </Route>
        <Route path="/workshop">
          <WorkshopContainer />
        </Route>
        <Route path="/">
          <Masthead />
        </Route>
      </Switch>
    </>
  );
}

export default Routes;
