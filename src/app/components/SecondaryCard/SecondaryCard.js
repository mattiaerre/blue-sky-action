import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const SecondaryCard = ({ article }) => (
  <div className="card">
    {article.publishedAt && (
      <div className="card-header">{moment(article.publishedAt).fromNow()}</div>
    )}
    <div className="card-body">
      <h4 className="card-title">
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          dangerouslySetInnerHTML={{ __html: article.title }}
        />
      </h4>
      <p className="card-text">{article.description}</p>
    </div>
  </div>
);

SecondaryCard.propTypes = {
  article: PropTypes.object.isRequired
};

export default SecondaryCard;
