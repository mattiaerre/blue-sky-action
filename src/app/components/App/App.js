import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../../components/Home/Home';
import News from '../../components/News/News';

const App = props => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-12">
        <h1>Blue Sky Action</h1>
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
          <li>
            <NavLink
              className="nav-link"
              activeClassName="active"
              exact
              to="/news/the-guardian-uk"
            >
              The Guardian (UK)
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link"
              activeClassName="active"
              exact
              to="/news/the-huffington-post"
            >
              The Huffington Post
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/news/:source" render={_ => <News {..._} {...props} />} />
    </Switch>
  </div>
);

App.propTypes = {
  articles: PropTypes.array.isRequired // eslint-disable-line react/forbid-prop-types
};

export default App;
