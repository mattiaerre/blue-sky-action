import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Articles from '../../containers/Articles/Articles';
import Footer from '../../components/Footer/Footer';
import Home from '../../components/Home/Home';
import Kanyini from '../../components/Kanyini/Kanyini';
import Navbar from '../../components/Navbar/Navbar';
import OnSale from '../../components/OnSale/OnSale';

const App = props => (
  <div>
    <Navbar categories={props.categories} sources={props.sources} />
    <div className="container-fluid bg-light">
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Kanyini} exact path="/kanyini" />
        <Route component={OnSale} exact path={props.onSalePath} />
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
  onSalePath: PropTypes.string.isRequired,
  sources: PropTypes.array.isRequired,
  version: PropTypes.string.isRequired,
  weather: PropTypes.array.isRequired
};

export default App;
