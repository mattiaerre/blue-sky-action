import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Articles from '../../containers/Articles/Articles';
import Blog from '../../containers/Blog/Blog';
import Footer from '../../components/Footer/Footer';
import Home from '../../components/Home/Home';
import Kanyini from '../../components/Kanyini/Kanyini';
import Navbar from '../../components/Navbar/Navbar';
import ForSale from '../../components/ForSale/ForSale';

const App = props => [
  <Navbar categories={props.categories} key="navbar" sources={props.sources} />,
  <div className="container-fluid bg-light" key="container">
    <Switch>
      <Route component={Home} exact path="/" />
      <Route component={Blog} exact path="/blog" />
      <Route component={Blog} exact path="/blog/:slug" />
      <Route component={Kanyini} exact path="/kanyini" />
      <Route component={ForSale} exact path={props.forSalePath} />
      <Route
        exact
        path="/:category/:source"
        render={_ => (
          <Articles {..._} articles={props.articles} sources={props.sources} />
        )}
      />
    </Switch>
  </div>,
  <Footer key="footer" name={props.name} version={props.version} />
];

App.propTypes = {
  articles: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  forSalePath: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  sources: PropTypes.array.isRequired,
  version: PropTypes.string.isRequired,
  weather: PropTypes.array.isRequired
};

export default App;
