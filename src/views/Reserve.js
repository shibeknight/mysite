import React from "react";
import { createUseStyles } from "react-jss";
import Container from "react-bootstrap/Container";
import Hero from "../components/Hero";
import RsvpForm from "../components/RsvpForm";
import heropic from "../assets/heropic6.jpeg";

const useStyles = createUseStyles({
  myContainer: {
    padding: "0",
    margin: "0",
    backgroundColor: "#f7f1f0",
  },
  myLabel: {
    fontWeight: "bold",
  },
});

const Reserve = () => {
  const classes = useStyles();
  return (
    <Container fluid className={classes.myContainer}>
      <Hero
        image={heropic}
        title="RSVP"
        subtitle="Please respond by October 1, 2020"
      />
      <RsvpForm />
    </Container>
  );
};

export default Reserve;
