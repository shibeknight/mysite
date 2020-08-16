import React from "react";
import { createUseStyles } from "react-jss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import invitacion from "../assets/invitacion.jpg";
import hero from "../assets/heropic.jpeg";
// import About from "./About";
// import Veracruz from './Veracruz';

const useStyles = createUseStyles({
  myCol: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "5vh",
  },
  myImage: {
    maxHeight: "68vh",
  },
  myButton: {
    maxWidth: "40vw",
  },
  "@media (max-width: 727px)": {
    myImage: {
      height: "65vh",
    },
  },
  myHero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${hero})`,
    /* Set a specific height */
    /* Position and center the image to scale nicely on all screens */
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    height: "600px",
    width: "100%"
  },
  myHeroText: {
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: `translate(-50%, -50%)`,
    color: "white",
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <Container fluid className={classes.myContainer}>
      <Row>
        <Col className={classes.myCol}>
          <div className={classes.myHero}>
            <div >
              <h1>I am John Doe</h1>
              <p>And I'm a Photographer</p>
              <button>Hire me</button>
            </div>
          </div>
        </Col>
      </Row>
      {/* <Row>
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
      </Row> */}
      {/* <About id='about'/>
      <Veracruz id='veracruz'/> */}
    </Container>
  );
};

export default Home;
