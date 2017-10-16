import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ name, version }) => (
  <footer className="border border-right-0 border-bottom-0 border-left-0">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <small className="float-right">{`${name} v${version}`}</small>
        </div>
      </div>
      <div>
        <div>
          <small className="float-right">
            <a
              href="https://newsapi.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              powered by News API
            </a>
          </small>
        </div>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  name: PropTypes.string.isRequired,
  version: PropTypes.string.isRequired
};

export default Footer;
