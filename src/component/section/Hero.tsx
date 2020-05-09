import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import ProfileImage from '../../assets/image.jpg';

function Hero(): JSX.Element {
  return (
    <Container>
      <Row>
        <Col md="auto">
          <Image src={ProfileImage} roundedCircle height="256px"/>
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
