import React from "react";
import { createUseStyles } from "react-jss";
import Container from "react-bootstrap/Container";
import Hero from "../components/Hero";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardBasic from "../components/CardBasic";
import sil3 from "../assets/sil3.jpg";
import dan2 from "../assets/dan2.jpg";
import sildan5 from "../assets/sildan5.jpg";
import hero from "../assets/heropic.jpeg";
import hero2 from "../assets/heropic2.jpeg";
import hero3 from "../assets/heropic3.jpeg";

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

const Home = () => {
  const classes = useStyles();
  return (
    <Container fluid className={classes.myContainer}>
      <Hero
        image={hero}
        title="Silvana y Daniel"
        subtitle="November 28, 2020 - Veracruz, Mexico"
        cursive={true}
      />
      <Row className={classes.myRow}>
        <Col
          style={{ paddingBottom: "3vh" }}
          className={classes.myCol}
          xs={12}
          md={12}
          lg={12}
        >
          <h1 style={{ textAlign: "center" }}>
            Please join Silvana and Daniel as we celebrate our wedding in
            Mexico!
          </h1>
        </Col>
        <Col className={classes.myCol} xs={12} md={4} lg={4}>
          <CardBasic image={sil3} title="Silvana" text={lorem} />
        </Col>
        <Col className={classes.myCol} xs={12} md={4} lg={4}>
          <CardBasic image={dan2} title="Daniel" text={lorem} />
        </Col>
        <Col className={classes.myCol} xs={12} md={4} lg={4}>
          <CardBasic image={sildan5} title="Us" text={lorem} />
        </Col>
      </Row>
      <Hero image={hero3} title="Covid Protocol" height="60vh" />
      <Row className={classes.myRow}>
        <Col
          style={{ paddingBottom: "3vh" }}
          className={classes.myCol}
          xs={12}
          md={12}
          lg={12}
        >
          <div style={{ textAlign: "center" }}>
            <h2>
              Please read the following document regarding health and safety
              protocols to be implemented in the venue.
            </h2>
            <p>Documento</p>
          </div>
        </Col>
      </Row>
      <Hero title="Wedding Day" height="70vh" image={hero2} />
      <Row className={classes.myRow}>
        <Col className={classes.myCol} xs={12} md={6} lg={6}>
          <CardBasic align={true} title="Ceremony" text={lorem} />
        </Col>
        <Col className={classes.myCol} xs={12} md={6} lg={6}>
          <CardBasic align={true} title="Reception" text={lorem} />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
