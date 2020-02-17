import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import constants from './constants';
import Home from './components/home';
import RemoveUnreferencedStrings from './components/removeUnreferencedStrings';
import RemapTranslations from './components/remapTranslations';
import ExtractLinks from './components/extractLinks';

const utils = constants.utilities;

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path={utils[1].path}>
          <RemoveUnreferencedStrings />
        </Route>
        <Route path={utils[2].path}>
          <RemapTranslations />
        </Route>
        <Route path={utils[3].path}>
          <ExtractLinks />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}