import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const PrimaryCard = ({ article }) => (
  <div className="card border-primary">
    {article.publishedAt && (
      <div className="card-header">{moment(article.publishedAt).fromNow()}</div>
    )}
    <img src={article.urlToImage} className="card-img-top" alt="" />
    <div className="card-body">
      <h3 className="card-title">
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          {article.title}
        </a>
      </h3>
      <p className="card-text">{article.description}</p>
    </div>
  </div>
);

PrimaryCard.propTypes = {
  article: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default PrimaryCard;