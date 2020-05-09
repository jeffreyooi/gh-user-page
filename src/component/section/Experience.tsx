import React from 'react';
import Section from '../Section';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';

interface ExperienceEntryProps {
  company: string;
  companyLink: string;
  role: string;
  startDate: string;
  endDate: string;
  jobScope: string[];
}

const experienceList: ExperienceEntryProps[] = [
  {
    company: "Shopee",
    companyLink: "https://careers.shopee.sg/about/",
    role: "Software Engineer",
    startDate: "April 2020",
    endDate: "Present",
    jobScope: [
      "Write performant, maintainable and highly scalable code for production and internal projects",
      "Design and implement supporting tools for internal teams",
      "Analyse and develop functionalities based on project requirements"
    ]
  },
  {
    company: "TinyMOS",
    companyLink: "https://www.facebook.com/thetinymos/",
    role: "Software Engineer",
    startDate: "May 2018",
    endDate: "Feb 2020",
    jobScope: [
      "Developed and shipped mobile companion applications for TINY1 and NANO1 on Apple's AppStore and Google's Play Store",
      "Developed and shipped image conversion tool that converts RAW images from TINY1 or NANO1 to other image format for macOS and Windows",
      "Maintained camera firmware and implemented new camera features requested by backers to improve user experience",
      "Developed and delivered software to support custom camera hardware for B2B clients",
      "Set up CI/CD pipeline for internal use using off-the-shelf software and consumer level hardware"
    ]
  },
  {
    company: "Acronis",
    companyLink: "https://www.acronis.com/",
    role: "Research Development Intern",
    startDate: "May 2019",
    endDate: "August 2019",
    jobScope: [
      "Researched and implemented security features for backend components for increased security",
      "Contributed to converting existing stateful components to stateless components for increased scalability and maintainability",
      "Wrote integration tests for backend components to ensure system stability"
    ]
  },
  {
    company: "Springloaded",
    companyLink: "https://www.springloadedsoftware.com/",
    role: "Game Developer",
    startDate: "August 2016",
    endDate: "May 2018",
    jobScope: [
      "Developed and maintained new and existing game servers on Amazon Web Services",
      "Developed ads integration library and in-app purchase library for mobile games on iOS and Android",
      "Built and maintained cross-platform common libraries for easy integration into mobile games",
      "Worked closely with game designers and programmers to develop game features",
      "Implemented new features for in-ho`use game engine to boost productivity of game programmers and designers"
    ]
  }
];

function ExperiencePanel(): JSX.Element {
  const body = (
    <Tab.Container defaultActiveKey={experienceList[0].company}>
      <Row xs={1} sm={1} md={12} lg={12} xl={12}>
        <Col sm={4}>
          <ListGroup>
            {
              experienceList.map((value, _) => {
                return (
                  <ListGroup.Item>
                    <Nav.Link eventKey={value.company} style={{backgroundColor: "transparent"}}>{value.company}</Nav.Link>
                  </ListGroup.Item>
                );
              })
            }
          </ListGroup>
        </Col>
        <Col sm={8}>
          <Tab.Content>
            {
              experienceList.map((value, _) => {
                return (
                  <Tab.Pane eventKey={value.company}>
                    <h4>{value.role} @ <a href={value.companyLink} style={{color: "#00ADB5"}}>{value.company}</a></h4>
                    <h6>{value.startDate} - {value.endDate}</h6>
                    <ul>
                      {
                        value.jobScope.map((value, index) => {
                          return <li key={index}>{value}</li>;
                        })
                      }
                    </ul>
                  </Tab.Pane>
                );
              })
            }
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );

  return (
    <Section title="Experience" body={body} />
  );
}

export default ExperiencePanel;
