import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Section from '../Section';

interface SkillProps {
  name: string;
  iconSrc: string;
}

const skillList: SkillProps[] = [
  {
    name: "Java",
    iconSrc: ""
  },
  {
    name: "Xamarin",
    iconSrc: ""
  },
  {
    name: "Golang",
    iconSrc: ""
  },
  {
    name: "C++",
    iconSrc: ""
  }
];

function Technologies(): JSX.Element {
  const body = (
    <div>
    {
      skillList.map((value, _) => {
        return (
          <Container>
          <Row>
            <Col>

            </Col>
            <Col>
              <h4>{value.name}</h4>
            </Col>
          </Row>
          </Container>
        );
      })
    }
    </div>
  );
  return (
    <Section title="Technologies" body={body} />
  );
}

export default Technologies;
