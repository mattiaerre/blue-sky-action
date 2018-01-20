import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Articles from '../../containers/Articles/Articles';
import Blog from '../../containers/Blog/Blog';
import Everything from '../../containers/Everything/Everything';
import Footer from '../../components/Footer/Footer';
import Home from '../../components/Home/Home';
import Kanyini from '../../components/Kanyini/Kanyini';
import Navbar from '../../components/Navbar/Navbar';

const App = ({ articles, categories, name, now, sources, version }) => [
  <Navbar categories={categories} key="navbar" sources={sources} />,
  <div className="container-fluid bg-light" key="container">
    <Switch>
      <Route exact path="/" render={_ => <Home {..._} now={now} />} />
      <Route component={Blog} exact path="/blog" />
      <Route component={Blog} exact path="/blog/:slug" />
      <Route component={Everything} exact path="/everything" />
      <Route component={Kanyini} exact path="/kanyini" />
      <Route
        exact
        path="/:category/:source"
        render={_ => <Articles {..._} articles={articles} sources={sources} />}
      />
    </Switch>
  </div>,
  <Footer key="footer" name={name} version={version} />
];

App.propTypes = {
  articles: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  now: PropTypes.object.isRequired,
  sources: PropTypes.array.isRequired,
  version: PropTypes.string.isRequired
};

export default App;
