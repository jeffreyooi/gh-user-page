import React from 'react';
import Container from 'react-bootstrap/Container';

const Fade = require('react-reveal/Fade');

function Footer(): JSX.Element {
  return (
    <Fade>
      <Container className="footer">
        <h5>
          Designed and built by Jeffrey Ooi
        </h5>
        <p>
          Made with <span role="img" aria-label="heart-emoji">❤️</span> using react-bootstrap
        </p>
      </Container>
    </Fade>
  );
}

export default Footer;
