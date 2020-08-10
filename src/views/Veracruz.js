import React from "react";
import { createUseStyles } from "react-jss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";

const useStyles = createUseStyles({
  myContainer: {
    border: "solid",
  },
  myCol: {
    display: "flex",
    justifyContent: "center",
    padding: "5vh",
    border: "solid",
  },
  myImage: {
    maxHeight: "60vh",
  },
  myButton: {
    maxWidth: "40vw",
  },
  myCard: {
    boxShadow: "5px 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    "&:hover": {
      boxShadow: "10px 8px 16px 0 rgba(0,0,0,0.2)",
    },
  },
});

const Veracruz = ({id}) => {
  const classes = useStyles();
  return (
    <div id={id}>
      <h1 style={{ paddingTop: "2.8vh" }}>Veracruz</h1>
      <Row>
        <Col sm={12} md={6} lg={6} className={classes.myCol}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="http://wiki.ifmsa.org/scope/images/e/e9/Mapa_Veracruz.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="http://conchaytoro.com/content/uploads/2019/01/Puerto-de-Veracruz-CC-Eduardo-Pavon.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="http://beserentacar.com/wp-content/uploads/2017/10/Los-10-lugares-imperdibles-en-Veracruz-BESE.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col sm={12} md={6} lg={6} className={classes.myCol}>
          <Card className={classes.myCard} fluid>
            <Card.Header as="h5">Featured</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Veracruz;
