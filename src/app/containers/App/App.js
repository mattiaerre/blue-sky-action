import React from 'react';
import { Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../../containers/Home/Home';
import News from '../../containers/News/News';

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
            <Link className="nav-link" to="/">
              Index
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/news/cnn">
              CNN
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <Route exact path="/" component={Home} />
    <Route exact path="/news/cnn" component={News} />
  </div>
);

App.propTypes = {
  who: PropTypes.string.isRequired
};

export default App;
