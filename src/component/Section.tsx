import React from 'react';
import Container from 'react-bootstrap/Container';

interface SectionProps {
  id?: string;
  title?: string;
  body?: any;
}

function Section(props: SectionProps): JSX.Element {
  const { id, title, body } = props;

  return (
    <Container id={id}>
      <h2>{title}</h2>
      {body}
    </Container>
  );
}

export default Section;
