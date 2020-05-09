import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Section from '../Section';

import DIFImg from '../../assets/dif.png';
import NANO1Icon from '../../assets/nano1.png';
import SquelcherImg from '../../assets/squelcher.jpg';
import TINY1Img from '../../assets/tiny1.png';

interface ProjectEntryProps {
  name: string;
  description: string;
  projectLink: string;
  projectImageSrc: string;
  skills: string[];
}

const projectList: ProjectEntryProps[] = [
  {
    name: "Desert Island Fishing",
    description: "Desert Island Fishing is an indie arcade mobile game with beautiful pixel art.",
    projectLink: "https://play.google.com/store/apps/details?id=com.springloaded.desertislandfishing",
    projectImageSrc: DIFImg,
    skills: [
      "Xamarin",
      "iOS",
      "Android",
      "MonoGame",
    ],
  },
  {
    name: "NANO1 Companion",
    description: "NANO1 Companion is a remote control app for NANO1, the world's smallest astronomy camera.",
    projectLink: "https://play.google.com/store/apps/details?id=com.tinymos.Nano1Connect",
    projectImageSrc: NANO1Icon,
    skills: [
      "Xamarin",
      "iOS",
      "Android",
    ],
  },
  {
    name: "Squelcher",
    description: "Sqelcher is an AR application for Ground Zero, a zine exhibition organized by Squelch Zines.",
    projectLink: "https://github.com/jeffreyooi/Squelcher_Unity",
    projectImageSrc: SquelcherImg,
    skills: [
      "Unity3D",
      "Vuforia",
      "iOS",
    ],
  },
  {
    name: "TINY1 Astronomy Camera",
    description: "TINY1 is the first generation of world smallest astronomy camera by TinyMOS.",
    projectLink: "https://www.tinymos.com/tiny1",
    projectImageSrc: TINY1Img,
    skills: [
      "Android",
      "C++",
    ],
  }
];

function Projects(): JSX.Element {
  const body = (
    <Row xs={1} sm={1} md={2} lg={3}>
    {
      projectList.map((value, _) => {
        return (
          <Col>
            <Card>
              <Card.Img src={value.projectImageSrc} />
              <Card.Body>
                <Card.Title>{value.name}</Card.Title>
                <Card.Text>
                  {value.description}
                  <Row>
                    {
                      value.skills.map((v, _) => {
                        return (
                          <Col>
                            <p>{v}</p>
                          </Col>
                        );
                      })
                    }
                  </Row>
                </Card.Text>
                <Button variant="primary" href={value.projectLink}>Project link</Button>
              </Card.Body>
            </Card>
          </Col>
        );
      })
    }
    </Row>
  );

  return (
    <Section id="projects" title="// Projects" body={body}/>
  );
}

export default Projects;
