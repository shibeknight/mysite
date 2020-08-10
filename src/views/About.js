import React from "react";
import { createUseStyles } from "react-jss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import silvana from "../assets/silvana.jpg";
import daniel from "../assets/daniel.jpg";
import both from "../assets/both.jpg";
import MyCard from "../components/MyCard";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec fringilla enim. Cras sodales ante sed urna varius congue. Mauris commodo turpis metus, sed mattis urna blandit at. Cras sit amet erat pretium, commodo urna ac, accumsan mi. Quisque non diam metus. Curabitur nec elit a elit tempor molestie. Sedultricies egestas justo sit amet luctus.";
const useStyles = createUseStyles({
  myCol: {
    display: "flex",
    justifyContent: "center",
    padding: "5vh",
  },
  cardImage: {
    maxHeight: "50vh",
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

const About = ({id}) => {
  const classes = useStyles();
  return (
    <div id={id}>
    <h1 style={{paddingTop: '2.8vh'}}>About us</h1>
      <Row>
        <Col sm={12} md={6} lg={6} className={classes.myCol}>
          <MyCard name="Silvana" image={silvana} text={lorem} />
        </Col>
        <Col sm={12} md={6} lg={6} className={classes.myCol}>
          <MyCard name="Daniel" image={daniel} text={lorem} />
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={12} lg={12} className={classes.myCol}>
          <MyCard name="Us" image={both} text={lorem} us />
        </Col>
      </Row>
    </div>
  );
};

export default About;
