import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../../components/Home/Home';
import News from '../../components/News/News';

const App = props => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-12">
        <h1>
          WW<span className="first-character">[{props.who.charAt(0)}]</span>D?
        </h1>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <ul className="nav">
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link"
              activeClassName="active"
              exact
              to="/news/cnn"
            >
              CNN
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/news/cnn" component={News} />
    </Switch>
  </div>
);

App.propTypes = {
  who: PropTypes.string.isRequired
};

export default App;
