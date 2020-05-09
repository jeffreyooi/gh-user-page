import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import ProfileImage from '../../assets/image.jpg';

function Hero(): JSX.Element {
  return (
    <Container>
      <Row xs={1} sm={1} md={2}>
        <Col md="auto" className="hero-col-img">
          <Image src={ProfileImage} roundedCircle width="256px" />
        </Col>
        <Col className="my-auto">
          <h5>Hello,</h5>
          <h1>
            I'm Jeffrey Ooi
          </h1>
          <h4>
            Software Engineer and Mobile App Developer based in Singapore
          </h4>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
