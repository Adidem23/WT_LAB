// BookCard.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

function BookCard({ bookName, price, description, category }) {
  return (
    <div className={'card'} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      <h3>{bookName}</h3>
      <p>
        <strong>Price:</strong> ${price}
      </p>
      <p>
        <strong>Description:</strong> {description}
      </p>
      <p>
        <strong>Category:</strong> {category}
      </p>
    </div>
  );
}

export default BookCard;
