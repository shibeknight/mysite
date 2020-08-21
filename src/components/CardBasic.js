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
      <Card.Img
        style={{ height: `${props.height ? props.height : ""}` }}
        variant="top"
        src={props.image}
      />
      <Card.Body>
        <Card.Title
          style={{
            fontSize: "2rem",
            textAlign: `${props.align ? "center" : ""}`,
          }}
        >
          {props.title}
        </Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{props.text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardBasic;
