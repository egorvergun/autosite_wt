'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const HobbiesPage = () => {
  const people = [
    {
      name: '0',
      photo: 'developer.jpg', // URL to the photo
      hobby: { title: '', description: '' },
    },
    {
      name: '1',
      photo: 'developer.jpg', // URL to the photo
      hobby: { title: '', description: '' },
    },
    {
      name: '2',
      photo: 'developer.jpg', // URL to the photo
      hobby: { title: '', description: '' },
    },
    {
      name: '3',
      photo: 'developer.jpg', // URL to the photo
      hobby: { title: '', description: '' },
    },
  ];

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Záľuby členov tímu</h1>
      <Row>
        {people.map((person, index) => (
          <Col key={index} md={3} sm={6} xs={12} className="mb-4">
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={person.photo}
                alt={`${person.name} photo`}
                className="img-fluid"
              />
              <Card.Body>
                <Card.Title>{person.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{person.hobby.title}</Card.Subtitle>
                <Card.Text>{person.hobby.description || 'Popis nie je dostupný.'}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HobbiesPage;
