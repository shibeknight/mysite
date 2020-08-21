import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import Container from "react-bootstrap/Container";

import Hero from "../components/Hero";
import RsvpForm from "../components/RsvpForm";
import heropic from "../assets/heropic7.jpeg";

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
  const [info, setinfo] = useState({
    email: "",
    fname: "",
    lname: "",
    going: "Yes",
    message: "",
  });
  const [loading, setisloading] = useState(false);
  const [success, setsuccess] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setinfo({ ...info, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const templateId = "template_5NPOxG7q";
    sendFeedback(templateId, info);
    console.log("The result is ", info);
  }

  function sendFeedback(templateId, variables) {
    console.log(variables);
    setisloading(true);
    window.emailjs
      .send("gmail", templateId, variables)
      .then((res) => {
        setisloading(false);
        setsuccess(true);
        console.log("Success!", res);
      })
      .catch((err) => console.log(err));
  }

  let section;

  if (loading) {
    section = <div>Loading...</div>;
  } else if (success) {
    section = <div>Success!</div>;
  } else {
    section = (
      <RsvpForm
        email={info.email}
        fname={info.fname}
        lname={info.lname}
        going={info.going}
        message={info.message}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    );
  }

  return (
    <Container fluid className={classes.myContainer}>
      <Hero
        image={heropic}
        title="RSVP"
        subtitle="Please respond by October 1, 2020"
      />
      {section}
    </Container>
  );
};

export default Reserve;
