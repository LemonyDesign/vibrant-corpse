import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Masthead from './Masthead';
import Hero from './Hero';
import RegisterContainer from '../containers/RegisterContainer';
import GenerateContainer from '../containers/GenerateContainer';
import WorkshopContainer from '../containers/WorkshopContainer';

import '../styles/base/base.scss';
import '../styles/base/forms.scss';
import '../styles/components/app.scss';

function Content() {
  return (
    <div className="app container">
      <main className="main">
        <Masthead />

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
            <Hero />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default Content;
