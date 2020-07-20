import React from "react";
import { createUseStyles } from "react-jss";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const useStyles = createUseStyles({
  myNav: {
    display: "flex",
    justifyContent: "center",
    minHeight: "11vh",
    border: 'solid green',
  },
  subNav: {
    justifyContent: "space-around",
    maxHeight: "3vh",
    flexWrap: 'unset',
    border: 'solid red',
  },
});

const Home = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>1 of 1</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
