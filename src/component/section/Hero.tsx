import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import ProfileImage from '../../assets/image.jpg';

const Fade = require("react-reveal/Fade");

function Hero(): JSX.Element {
  return (
    <Fade bottom>
      <Container className="hero-container">
        <Row xs={1} sm={1} md={2}>
          <Col md="auto" className="hero-col-img">
            <Image src={ProfileImage} roundedCircle width="256px" height="256px" />
          </Col>
          <Col className="my-auto">
            <p>Hello, I'm</p>
            <h1>
              Jeffrey Ooi.
            </h1>
            <h5>
              I'm a software engineer based in Singapore.
            </h5>
            <p>
            I write mobile apps and games, and I'm currently leaning towards backend development.
            </p>
          </Col>
        </Row>
      </Container>
    </Fade>
  );
}

export default Hero;
