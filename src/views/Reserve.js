import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import ScrollAnimation from "react-animate-on-scroll";
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
  myCol: {
    display: "flex",
    justifyContent: "center",
  },
  spinCol: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "300px",
  },
  myRow: {
    paddingTop: "4.2vh",
    paddingRight: "20px",
    paddingLeft: "20px",
    marginRight: "auto",
    marginLeft: "auto",
    justifyContent: "center",
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
  const [validated, setvalidated] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setinfo({ ...info, [name]: value });
  }

  function handleSubmit(e) {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      setvalidated(true);
    } else if (info.fname === "" || info.lname === "") {
      setvalidated(false);
    } else {
      e.preventDefault();
      e.stopPropagation();
      const templateId = "template_5NPOxG7q";
      sendFeedback(templateId, info);
      // console.log("The result is ", info);
    }
  }

  function sendFeedback(templateId, variables) {
    setisloading(true);
    window.emailjs
      .send("gmail", templateId, variables)
      .then((res) => {
        setTimeout(setisloading(false), 1500);
        setsuccess(true);
      })
      .catch((err) => console.log(err));
  }

  let section;

  if (loading) {
    section = (
      <Col className={classes.spinCol}>
        <Button
          size="lg"
          style={{ height: "fit-content" }}
          variant="success"
          disabled
        >
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
            style={{ marginRight: "5px" }}
          />
          Enviando...
        </Button>
      </Col>
    );
  } else if (success) {
    section = (
      <Col className={classes.spinCol}>
        <Alert variant="success" style={{ backgroundColor: "#d5e8de" }}>
          <Alert.Heading>Gracias por confirmar!</Alert.Heading>
          <p>
            Si agregaste tu correo en el formulario, recibiras pronto un mensaje
            con tu confirmacion!
          </p>
        </Alert>
      </Col>
    );
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
        validated={validated}
      />
    );
  }

  return (
    <Container fluid className={classes.myContainer}>
      <Hero
        image={heropic}
        title="RSVP"
        subtitle="Please respond by October 15, 2020"
      />

      <Row className={classes.myRow}>
        <Col
          style={{ paddingBottom: "3vh" }}
          className={classes.myCol}
          xs={12}
          md={12}
          lg={12}
        >
          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <h1 style={{ textAlign: "center" }}>
              ¡Tu asistencia es muy importante para nosotros, por favor haznos
              saber!
            </h1>
          </ScrollAnimation>
        </Col>
      </Row>
      {section}
    </Container>
  );
};

export default Reserve;
