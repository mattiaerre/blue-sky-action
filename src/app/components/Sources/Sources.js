import React from 'react';
import PropTypes from 'prop-types';
import TiNews from 'react-icons/lib/ti/news';
import { NavLink } from 'react-router-dom';
import dictionary from '../../dictionary';

const Sources = ({ category, sources }) => {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <h2>
            <TiNews />{' '}
            <span className="align-middle">{dictionary[category]}</span>
          </h2>
        </div>
      </div>
      <div className="row pb-3">
        <div className="col-12">
          <ul className="nav nav-pills">
            {sources
              .filter(source => source.category === category)
              .map(source => (
                <li key={source.id} className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeClassName="active"
                    to={`/${category}/${source.id}`}
                  >
                    {source.name}
                  </NavLink>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

Sources.propTypes = {
  category: PropTypes.string.isRequired,
  sources: PropTypes.array.isRequired // eslint-disable-line react/forbid-prop-types
};

export default Sources;
