import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import dictionary from '../../dictionary';
import map from './default-source-category-map.json';

function numberOfSources(sources, category) {
  return sources.filter(source => source.category === category).length;
}

const Navbar = ({ categories, sources }) => (
  <nav className="navbar navbar-expand-lg navbar-light border border-top-0 border-right-0 border-left-0">
    <a className="navbar-brand" href="/">
      [`/`]
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbar"
      aria-controls="navbar"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbar">
      <ul className="navbar-nav mr-auto">
        {categories.map(category => (
          <li key={category} className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="active"
              to={`/${category}/${map[category]}`}
            >
              {`${dictionary[category]} `}
              <span className="badge badge-secondary">
                {numberOfSources(sources, category)}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

Navbar.propTypes = {
  categories: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  sources: PropTypes.array.isRequired // eslint-disable-line react/forbid-prop-types
};

export default Navbar;
