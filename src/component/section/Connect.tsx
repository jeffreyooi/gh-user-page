import React from 'react';
import Container from 'react-bootstrap/Container';
import Section from '../Section';

import Image from 'react-bootstrap/Image';

import EmailIcon from '../../assets/email.svg';
import InstagramIcon from '../../assets/instagram.svg';
import LinkedInIcon from '../../assets/linkedin.svg';

function ConnectPanel(): JSX.Element {
  const body = (
    <div>
      <p>
        I'm currently not open for new opportunities, but I'm always open to connecting with people and form new connections. 
        You can always reach out to me on the following platforms:
      </p>
      <Container className="footer">
        <a href="mailto:jeffreyooihs@gmail.com"><Image src={EmailIcon} /></a>
        <a href="https://www.linkedin.com/in/jeffreyooi" target="_blank" rel="noopener noreferrer"><Image src={LinkedInIcon} /></a>
        <a href="https://www.instagram.com/jeffrey_ooi" target="_blank" rel="noopener noreferrer"><Image src={InstagramIcon} /></a>
      </Container>
    </div>
  );

  return (
    <Section title="Let's connect!" body={body} />
  );
}

export default ConnectPanel;
