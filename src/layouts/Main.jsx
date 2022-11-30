import { Intro, About, Focus, Skill } from '../components';
import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap-trial/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function Main() {
  useEffect(() => {
    gsap.utils.toArray('section').forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: 'top top',
        pin: true,
        pinSpacing: false,
      });
    });

    ScrollTrigger.create({
      snap: 0.332
    });
  }, []);

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
