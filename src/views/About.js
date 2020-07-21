import React from "react";
import { createUseStyles } from "react-jss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import silvana from "../assets/silvana.jpg";
import daniel from "../assets/daniel.jpg";

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
  cardImage: {
      maxHeight: '50vh'
  },
  myCard: {
      boxShadow: '5px 4px 8px 0 rgba(0,0,0,0.2)',
      transition: '0.3s',
      '&:hover': {
        boxShadow: '10px 8px 16px 0 rgba(0,0,0,0.2)'
      }
  }
});

const About = () => {
  const classes = useStyles();
  return (
    <Container className={classes.myContainer}>
      <Row>
        <Col sm={12} md={6} lg={6} className={classes.myCol}>
          <Card className={classes.myCard} fluid>
            <Card.Img className={classes.cardImage} variant="top" src={silvana} />
            <Card.Body>
              <Card.Title>Silvana</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                nec fringilla enim. Cras sodales ante sed urna varius congue.
                Mauris commodo turpis metus, sed mattis urna blandit at. Cras
                sit amet erat pretium, commodo urna ac, accumsan mi. Quisque non
                diam metus. Curabitur nec elit a elit tempor molestie. Sed
                ultricies egestas justo sit amet luctus.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={6} className={classes.myCol}>
          <Card className={classes.myCard} fluid>
            <Card.Img className={classes.cardImage} variant="top" src={daniel} />
            <Card.Body>
              <Card.Title>Daniel</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                nec fringilla enim. Cras sodales ante sed urna varius congue.
                Mauris commodo turpis metus, sed mattis urna blandit at. Cras
                sit amet erat pretium, commodo urna ac, accumsan mi. Quisque non
                diam metus. Curabitur nec elit a elit tempor molestie. Sed
                ultricies egestas justo sit amet luctus.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
