import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const PrimaryCard = ({ article }) => (
  <div className="card">
    {article.publishedAt && (
      <div className="card-header">{moment(article.publishedAt).fromNow()}</div>
    )}
    <img src={article.urlToImage} className="card-img-top" alt="" />
    <div className="card-body">
      <h3 className="card-title">
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          dangerouslySetInnerHTML={{ __html: article.title }}
        />
      </h3>
      <p
        className="card-text"
        dangerouslySetInnerHTML={{ __html: article.description }}
      />
    </div>
  </div>
);

PrimaryCard.propTypes = {
  article: PropTypes.object.isRequired
};

export default PrimaryCard;
