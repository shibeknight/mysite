import React from "react";
import { createUseStyles } from "react-jss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Hero from "../components/Hero";
import CardBasic from "../components/CardBasic";
import veracruz from "../assets/veracruz/9.JPG";
import mapa from "../assets/veracruz/veracruzmapa.png";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas dui et facilisis porttitor. Morbi ultrices diam vitae libero aliquet, ac luctus ante egestas. Maecenas finibus luctus tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean ac mauris eleifend, semper libero quis, vehicula nibh. Nullam fermentum nisi eu neque placerat, sed euismod elit faucibus. Etiam placerat finibus vehicula. Duis a ex at nisl consequat dapibus quis at ligula.";

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
  },
});

const Veracruz = () => {
  const classes = useStyles();
  return (
    <Container fluid className={classes.myContainer}>
      <Hero image={veracruz} title="Veracruz" />
      <Row className={classes.myRow}>
        <Col
          style={{ paddingBottom: "3vh" }}
          className={classes.myCol}
          xs={12}
          md={12}
          lg={12}
        >
          <div style={{ textAlign: "center" }}>
            <h1>Directions</h1>
            <p>Direcciones para llegar a Veracruz</p>
            <img alt="mapa" src={mapa} />
          </div>
        </Col>
        <Col className={classes.myCol} xs={12} md={6} lg={6}>
          <CardBasic align={true} title="Ceremony" text={lorem} />
        </Col>
        <Col className={classes.myCol} xs={12} md={6} lg={6}>
          <CardBasic align={true} title="Ceremony" text={lorem} />
        </Col>
      </Row>
    </Container>
  );
};

export default Veracruz;
