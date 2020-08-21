import React from "react";
import Card from "react-bootstrap/Card";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  myImage: {
    height: (props) => props.mheight,
  },
  "@media (min-width: 1024px)": {
    myImage: {
      height: (props) => props.height,
    },
  },
});

const CardBasic = (props) => {
  const classes = useStyles(props);
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
      {props.image ? (
        <Card.Img className={classes.myImage} variant="top" src={props.image} />
      ) : (
        ""
      )}

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

CardBasic.defaultProps = {
  height: "unset",
  mheight: "unset",
};

export default CardBasic;
