import React, { Component, Fragment } from 'react';
// import { Container } from 'bootstrap-4-react';

import {HashRouter, Route, Switch} from 'react-router-dom';

import Blog from './pages/Blog';
import Contact from './pages/Contact';
import DuoLivre from './pages/DuoLivre';
import Home from './pages/Home';

import './Main.css';

export default class Main extends Component {
  render() {
    return (
      <Fragment>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/duolivre" component={DuoLivre}/>
            <Route exact path="/blog" component={Blog}/>
            <Route exact path="/contact" component={Contact}/>
          </Switch>
        </HashRouter>
      </Fragment>
    )
  }
}
