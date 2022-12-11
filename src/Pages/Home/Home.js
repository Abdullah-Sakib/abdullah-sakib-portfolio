import React from 'react';
import GetInTouch from './GetInTouch';
import Header from './Header';
import Projects from './Projects';
import Skills from './Skills';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Skills></Skills>
      <Projects></Projects>
      <GetInTouch></GetInTouch>
    </div>
  );
};

export default Home;