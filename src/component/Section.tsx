import React from 'react';
import Container from 'react-bootstrap/Container';

interface SectionProps {
  title?: string;
  body?: any;
}

function Section(props: SectionProps): JSX.Element {
  const { title, body } = props;

  return (
    <Container>
      <h1>{title}</h1>
      {body}
    </Container>
  );
}

export default Section;
