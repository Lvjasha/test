import React from 'react';
import { Card } from 'react-bootstrap';

function Cards(el) {
  return (
    <Card className="mb-3">
      <Card.Img variant="top" src={el.image} className="product-img" />
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text className="d-flex justify-content-between align-items-center">
          <span>Price:</span>
          <span>{el.price} руб.</span>
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
      {/* <Card.Footer className="text-muted"></Card.Footer> */}
    </Card>
  );
}

export default Cards;
