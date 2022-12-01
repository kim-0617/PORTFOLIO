import { Intro, About, Focus, Skill } from '../components';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Main() {
  useEffect(() => {
    ScrollTrigger.create({
      trigger: '#intro',
      start: 'top top',
      pin: true,
      pinSpacing: false,
    });

    // ScrollTrigger.create({
    //   trigger: '#about',
    //   start: 'top top',
    //   pin: true,
    //   pinSpacing: false,
    // });

    // ScrollTrigger.create({
    //   snap: 0.332,
    // });
  }, []);

  return (
    <main id="main">
      <div>
        <Intro />
        <About />
      </div>
    </main>
  );
}

export default Main;
