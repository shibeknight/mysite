import React from "react";
import { createUseStyles } from "react-jss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ScrollAnimation from "react-animate-on-scroll";

const useStyles = createUseStyles({
  myCol: {
    // display: "flex",
    // justifyContent: "center",
    padding: "10px",
  },
  myRow: {
    paddingTop: "4.2vh",
    paddingBottom: "4.2vh",
    paddingRight: "15vw",
    paddingLeft: "15vw",
    marginRight: "auto",
    marginLeft: "auto",
    display: "flex",
    justifyContent: "center",
  },
  myLabel: {
    fontWeight: "bold",
  },
});

const RsvpForm = (props) => {
  const classes = useStyles();
  return (
    <Form>
      <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
        <Row className={classes.myRow}>
          <Col xs={12} sm={12} md={12} lg={12} className={classes.myCol}>
            <Form.Label className={classes.myLabel}>Email address</Form.Label>
            <Form.Control
              onChange={props.handleChange}
              name="email"
              value={props.email}
              type="email"
              placeholder="someone@mail.com"
            />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} className={classes.myCol}>
            <Form.Control
              onChange={props.handleChange}
              name="fname"
              value={props.fname}
              type="input"
              placeholder="First name"
            />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} className={classes.myCol}>
            <Form.Control
              onChange={props.handleChange}
              name="lname"
              value={props.lname}
              type="input"
              placeholder="Last name"
            />
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} className={classes.myCol}>
            <Form.Label
              onChange={props.handleChange}
              className={classes.myLabel}
            >
              Will you be there?
            </Form.Label>
            <Form.Control
              onChange={props.handleChange}
              name="going"
              value={props.going}
              as="select"
            >
              <option>Yes</option>
              <option>No</option>
            </Form.Control>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} className={classes.myCol}>
            <Form.Label className={classes.myLabel}>Message</Form.Label>
            <Form.Control
              onChange={props.handleChange}
              name="message"
              value={props.message}
              as="textarea"
              rows="3"
            />
          </Col>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={12}
            className={classes.myCol}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button
              style={{ fontWeight: "bold", width: "40%" }}
              variant="outline-success"
              onClick={props.handleSubmit}
            >
              Submit
            </Button>
          </Col>
        </Row>
      </ScrollAnimation>
    </Form>
  );
};

export default RsvpForm;
