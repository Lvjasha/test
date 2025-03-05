import React, { useEffect, useState } from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import Cards from './Cards';

function Catalog() {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    //fetch('/catalog') можно не писать полностью, потому что  package  прописан адрес
    fetch('http://localhost:8000/catalog')
      .then((res) => res.json())
      .then((data) => setCatalog(data));
  }, []);

  return (
    <Container className="my-4">
      <Row>
        <Col xs={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>Платье</ListGroup.Item>
            <ListGroup.Item>Шляпы</ListGroup.Item>
            <ListGroup.Item>Обувь</ListGroup.Item>
            <ListGroup.Item>Ножи</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col xs={9}>
          <Row>
            {catalog.map((el) => (
              <Col key={el.id} xs={4} sm={12} md={6} lg={4} xl={4}>
                <Cards {...el} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Catalog;
