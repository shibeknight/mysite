import React from "react";
import Card from "react-bootstrap/Card";

const CardBasic = (props) => {
  return (
    <Card
      border="light"
      style={{
        color: "#455f4b",
        marginBottom: "3vh",
        backgroundColor: "transparent",
        border: "none",
        fontSize: "1.1rem",
      }}
    >
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title
          style={{
            fontSize: "2rem",
            textAlign: `${props.align ? "center" : ""}`,
          }}
        >
          {props.title}
        </Card.Title>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardBasic;
