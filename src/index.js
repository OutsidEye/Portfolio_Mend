// Base
import React from 'react';
import {render} from 'react-dom';
// Router
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// Components
import Home from './components/Home';
import NotFound from './components/NotFound';
// CSS
import './style.css';

const Root = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>
  )
}

render(
  <Root/>, document.getElementById('root')
);
