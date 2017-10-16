import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Articles from '../../components/Articles/Articles';
import Footer from '../../components/Footer/Footer';
import Home from '../../components/Home/Home';
import Navbar from '../../components/Navbar/Navbar';
import Sources from '../../components/Sources/Sources';

const App = props => (
  <div>
    <Navbar categories={props.categories} sources={props.sources} />
    <div className="container-fluid bg-light">
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
    <Footer name={props.name} version={props.version} />
  </div>
);

App.propTypes = {
  articles: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  categories: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  name: PropTypes.string.isRequired,
  sources: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  version: PropTypes.string.isRequired,
  weather: PropTypes.object // eslint-disable-line react/forbid-prop-types
};

App.defaultProps = {
  weather: null
};

export default App;
