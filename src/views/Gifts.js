import React from "react";
import { createUseStyles } from "react-jss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Hero from "../components/Hero";
import ScrollAnimation from "react-animate-on-scroll";
import heropic from "../assets/heropic5.jpeg";

let texto = require("../assets/texto.json");

const useStyles = createUseStyles({
  myContainer: {
    padding: "0",
    margin: "0",
    backgroundColor: "#f7f1f0",
  },
  myCol: {
    display: "flex",
    justifyContent: "center",
  },
  myRow: {
    paddingTop: "4.2vh",
    paddingRight: "20px",
    paddingLeft: "20px",
    marginRight: "auto",
    marginLeft: "auto",
    display: "flex",
    justifyContent: "center",
  },
  myText: {
    fontSize: "",
  },
  "@media (max-width: 727px)": {
    myText: {
      fontSize: "1.5rem",
    },
  },
});

const Gifts = () => {
  const classes = useStyles();
  return (
    <Container fluid className={classes.myContainer}>
      <Hero
        image={heropic}
        title="Gifts"
        subtitle="Contribute to our plans for the future"
      />
      <Row className={classes.myRow}>
        <Col
          style={{
            paddingBottom: "3vh",
          }}
          className={classes.myCol}
          xs={8}
          md={8}
          lg={8}
        >
          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <h1 className={classes.myText} style={{ textAlign: "center" }}>
              {texto.giftsText}
            </h1>
            <h2 className={classes.myText} style={{ textAlign: "center" }}>
              ¡Gracias por ser parte de nuestra historia!
            </h2>
            <h2 className={classes.myText} style={{ textAlign: "center" }}>
              Daniel y Silvana
            </h2>
          </ScrollAnimation>
        </Col>
      </Row>
    </Container>
  );
};

export default Gifts;
