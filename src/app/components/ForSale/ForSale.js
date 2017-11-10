import React from 'react';
import PropTypes from 'prop-types';
import forSale from './for-sale.json';

const Card = ({ item }) => (
  <div className="card">
    <img src={`/images/${item.image}`} className="card-img-top" alt="" />
    <div className="card-body">
      <h3 className="card-title">{item.name}</h3>
      <h4>{item['model-number']}</h4>
      <p className="card-text">{item.date}</p>
    </div>
  </div>
);

Card.propTypes = {
  item: PropTypes.object.isRequired
};

const ForSale = () => (
  <div>
    <div className="row">
      <div className="col-12">
        <h2>For Sale</h2>
      </div>
    </div>
    <div className="row">
      {Object.keys(forSale).map(key => (
        <div className="col-md-4 col-sm-6 mb-4" key={key}>
          <Card item={forSale[key]} />
        </div>
      ))}
    </div>
  </div>
);

export default ForSale;
