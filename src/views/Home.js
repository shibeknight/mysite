import React from "react";
import { createUseStyles } from "react-jss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import invitacion from '../assets/invitacion.jpg'
import About from "./About";
import Veracruz from './Veracruz';

const useStyles = createUseStyles({
  myCol: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "5vh",
  },
  myImage: {
    maxHeight: "66vh",
  },
  myButton: {
    maxWidth: "40vw",
  },
  "@media (max-width: 727px)": {
    myImage: {
      height: "65vh",
    }
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <Container className={classes.myContainer}>
      <Row>
        <Col className={classes.myCol}>
          <Image
            className={classes.myImage}
            src={invitacion}
            rounded
            fluid
          />
        </Col>
      </Row>
      <Row>
        <Col className={classes.myCol}>
          <Button
            className={classes.myButton}
            size="lg"
            block
            style={{backgroundColor: 'rgb(101 138 63 / 81%)', border: 'none'}}
          >
            Confirmar asistencia
          </Button>
        </Col>
      </Row>
      <About id='about'/>
      <Veracruz id='veracruz'/>
    </Container>
  );
};

export default Home;
