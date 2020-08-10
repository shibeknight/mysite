import React from "react";
import { createUseStyles } from "react-jss";
import Card from "react-bootstrap/Card";

const useStyles = createUseStyles({
  cardImage: {
    maxHeight: "66vh",
  },
  myCard: {
    boxShadow: "5px 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    "&:hover": {
      boxShadow: "10px 8px 16px 0 rgba(0,0,0,0.2)",
    },
  },
  usCard: {
    boxShadow: "5px 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    "&:hover": {
      boxShadow: "10px 8px 16px 0 rgba(0,0,0,0.2)",
    },
  },
  "@media (min-width: 727px)": {
    usCard: {
      maxWidth: "30vw",
    },
  },
});

const MyCard = (props) => {
  const classes = useStyles();
  return (
    <Card className={props.us ? classes.usCard : classes.myCard} fluid>
      <Card.Img className={classes.cardImage} variant="top" src={props.image} />
      <Card.Body>
        <Card.Title style={{ fontWeight: "bold" }}>{props.name}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MyCard;
