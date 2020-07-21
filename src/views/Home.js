import React from "react";
import { createUseStyles } from "react-jss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const useStyles = createUseStyles({
  myContainer: {
    border: "solid",
  },
  myCol: {
    display: "flex",
    justifyContent: "center",
    paddingTop: '5vh'
  },
  myImage: {
    maxHeight: "60vh",
  },
  myButton: {
    maxWidth: '40vw'
  }
});

const Home = () => {
  const classes = useStyles();
  return (
   
      <Container className={classes.myContainer}>
        <Row>
          <Col className={classes.myCol}>
            <Image
              className={classes.myImage}
              src="https://i.redd.it/kga8zxvvmh751.jpg"
              rounded
              fluid
            />
          </Col>
        </Row>
        <Row>
          <Col className={classes.myCol}>
            <Button className={classes.myButton} variant="success" size="lg" block>
              Confirmar asistencia
            </Button>
          </Col>
        </Row>
      </Container>
    
  );
};

export default Home;
