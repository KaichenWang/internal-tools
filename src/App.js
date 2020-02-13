import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import constants from './constants';
import Home from './components/home';
import RemoveUnreferencedStrings from './components/removeUnreferencedStrings';
import RemapTranslations from './components/remapTranslations';

const utils = constants.utilities;

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path={utils[1].path}>
          <RemoveUnreferencedStrings />
        </Route>
        <Route path={utils[2].path}>
          <RemapTranslations />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}