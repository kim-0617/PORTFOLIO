import React from 'react';
import { Intro, About, Focus, Skill } from '../components';

function Main() {
  return (
    <main id="main">
      <div>
        <Intro />
        <About />
        <Focus />
        <Skill />
      </div>
    </main>
  );
}

export default Main;
