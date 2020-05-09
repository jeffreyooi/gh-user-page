import React from 'react';
import './custom.scss';
import About from './component/section/About';
import ConnectPanel from './component/section/Connect';
import ExperiencePanel from './component/section/Experience';
import Footer from './component/section/Footer';
import Header from './component/section/Header';
import Hero from './component/section/Hero';
import Projects from './component/section/Projects';

function App() {
  return (
    <div className="App" style={{background: "#222831"}}>
      <Header />
      <Hero />
      <About />
      <ExperiencePanel />
      <Projects />
      <ConnectPanel />
      <Footer />
    </div>
  );
}

export default App;
