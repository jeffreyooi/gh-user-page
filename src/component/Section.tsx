import React from 'react';
import Container from 'react-bootstrap/Container';

const Fade = require('react-reveal/Fade');

interface SectionProps {
  id?: string;
  title?: string;
  body?: any;
}

function Section(props: SectionProps): JSX.Element {
  const { id, title, body } = props;

  return (
    <Fade bottom>
      <Container id={id}>
        <h2>{title}</h2>
        {body}
      </Container>
    </Fade>
  );
}

export default Section;
