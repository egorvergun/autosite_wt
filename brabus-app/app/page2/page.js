'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const HobbiesPage = () => {
  const people = [
    {
      name: 'Matúš',
      photo: 'developer.jpg', // URL fotky
      hobby: { title: 'Čítanie', description: '' },
    },
    {
      name: '1',
      photo: 'developer.jpg', // URL fotky
      hobby: { title: 'Fotografovanie', description: '' },
    },
    {
      name: '2',
      photo: 'developer.jpg', // URL fotky
      hobby: { title: 'Hudba', description: '' },
    },
    {
      name: '3',
      photo: 'developer.jpg', // URL fotky
      hobby: { title: 'Hry', description: '' },
    },
  ];

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Záľuby členov tímu</h1>
      <Row>
        {people.map((person, index) => (
          <Col key={index} md={3} className="mb-4">
            <Card>
              <Card.Body>
                {/* Fotka člena tímu sa zobrazuje tu */}
                <Card.Img variant="top" src={person.photo} alt={`${person.name} photo`} />
                <Card.Title>{person.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{person.hobby.title}</Card.Subtitle>
                <Card.Text>{person.hobby.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HobbiesPage;
