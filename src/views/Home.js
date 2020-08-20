import React from "react";
import { createUseStyles } from "react-jss";
import Container from "react-bootstrap/Container";
import Hero from "../components/Hero";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardBasic from "../components/CardBasic";
import sil from "../assets/sil.jpeg";
import sildan2 from "../assets/sildan2.jpeg";
import sildan3 from "../assets/sildan3.jpeg";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas dui et facilisis porttitor. Morbi ultrices diam vitae libero aliquet, ac luctus ante egestas. Maecenas finibus luctus tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean ac mauris eleifend, semper libero quis, vehicula nibh. Nullam fermentum nisi eu neque placerat, sed euismod elit faucibus. Etiam placerat finibus vehicula. Duis a ex at nisl consequat dapibus quis at ligula.";

const useStyles = createUseStyles({
  myContainer: {
    padding: "0",
    margin: "0",
    backgroundColor: '#f7f1f0',
  },
  myCol: {
    display: "flex",
    justifyContent: "center",
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <Container fluid className={classes.myContainer}>
      <Hero />
      <Row
        style={{
          paddingTop: "4vh",
          paddingRight: "20px",
          paddingLeft: "20px",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
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
          <CardBasic image={sil} title="Silvana" text={lorem} />
        </Col>
        <Col className={classes.myCol} xs={12} md={4} lg={4}>
          <CardBasic image={sildan3} title="Daniel" text={lorem} />
        </Col>
        <Col className={classes.myCol} xs={12} md={4} lg={4}>
          <CardBasic image={sildan2} title="Us" text={lorem} />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
