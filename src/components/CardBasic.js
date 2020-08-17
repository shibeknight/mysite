import React from "react";
import Card from "react-bootstrap/Card";

const CardBasic = (props) => {
  return (
    <Card border="light">
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title style={{ fontSize: "2rem" }}>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardBasic;
