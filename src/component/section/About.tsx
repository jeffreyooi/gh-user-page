import React from 'react';
import Section from '../Section';

function About(): JSX.Element {
  const body = (
    <p>
      Hi there! I'm Jeffrey, a software engineer based in Singapore.
      <br></br><br></br>
      I enjoy solving problems, and I'm constantly looking out for new things to learn.
      During my university years, I took up part-time jobs as mobile app and game developer
      to gain hands-on experience and knowledge about the field and industry.
      <br></br><br></br>
      After graduating from National University of Singapore with Bachelor Degree in Computer Science, 
      I joined Shopee's engineering team where I work as a backend software engineer.
    </p>
  );

  return (
    <Section id="about" title="// About me" body={body} />
  );
}

export default About;
