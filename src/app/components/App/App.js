import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Articles from '../../containers/Articles/Articles';
import Footer from '../../components/Footer/Footer';
import Home from '../../components/Home/Home';
import Kanyini from '../../components/Kanyini/Kanyini';
import Navbar from '../../components/Navbar/Navbar';

const withWeather = weather => Comp =>
  // eslint-disable-next-line react/prefer-stateless-function
  class WithWeather extends Component {
    render() {
      return <Comp weather={weather} />;
    }
  };

const App = props => (
  <div>
    <Navbar categories={props.categories} sources={props.sources} />
    <div className="container-fluid bg-light">
      <Switch>
        <Route
          component={withWeather(props.weather.home)(Home)}
          exact
          path="/"
        />
        <Route
          component={withWeather(props.weather.kanyini)(Kanyini)}
          exact
          path="/kanyini"
        />
        <Route
          exact
          path="/:category/:source"
          render={_ => (
            <Articles
              {..._}
              articles={props.articles}
              sources={props.sources}
            />
          )}
        />
      </Switch>
    </div>
    <Footer name={props.name} version={props.version} />
  </div>
);

App.propTypes = {
  articles: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  sources: PropTypes.array.isRequired,
  version: PropTypes.string.isRequired,
  weather: PropTypes.object.isRequired
};

export default App;
