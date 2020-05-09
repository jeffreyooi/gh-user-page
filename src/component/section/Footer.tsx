import React from 'react';
import Container from 'react-bootstrap/Container';

function Footer(): JSX.Element {
  return (
    <Container className="footer">
      <h5>
        Designed and built by Jeffrey Ooi
      </h5>
      <p>
        Made with <span role="img" aria-label="heart-emoji">❤️</span> using react-bootstrap
      </p>
    </Container>
  );
}

export default Footer;
