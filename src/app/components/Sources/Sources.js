import React, { Component } from 'react';
import PropTypes from 'prop-types';
import dictionary from '../../dictionary';

/* eslint-disable react/prefer-stateless-function */
class Sources extends Component {
  render() {
    const { category } = this.props.match.params;
    return (
      <div className="row">
        <div className="col-12">
          <h2>{dictionary[category]}</h2>
        </div>
      </div>
    );
  }
}

Sources.propTypes = {
  match: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default Sources;
