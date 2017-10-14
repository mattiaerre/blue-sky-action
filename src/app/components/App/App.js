import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Articles from '../../components/Articles/Articles';
import Home from '../../components/Home/Home';
import Navbar from '../../components/Navbar/Navbar';
import Sources from '../../components/Sources/Sources';

const App = props => (
  <div>
    <Navbar categories={props.categories} sources={props.sources} />
    <div className="container-fluid">
      <Route
        path="/:category"
        render={_ => <Sources {..._} sources={props.sources} />}
      />
      <Switch>
        <Route
          exact
          path="/"
          render={_ => <Home {..._} weather={props.weather} />}
        />
        <Route
          exact
          path="/:category/:source"
          render={_ => <Articles {..._} articles={props.articles} />}
        />
      </Switch>
    </div>
  </div>
);

App.propTypes = {
  articles: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  categories: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  match: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  sources: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  weather: PropTypes.object // eslint-disable-line react/forbid-prop-types
};

App.defaultProps = {
  match: { params: { category: 'general' } },
  weather: null
};

export default App;
