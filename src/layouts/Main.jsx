import { Intro, About, Coding } from '../sections';
import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Loader } from '../others';

gsap.registerPlugin(ScrollTrigger);

function Main() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) return;

    ScrollTrigger.create({
      trigger: '#intro',
      start: 'top top',
      pin: true,
      pinSpacing: false,
    });

    ScrollTrigger.create({
      trigger: '#about',
      start: 'bottom bottom',
      pin: true,
      pinSpacing: false,
    });


    // ScrollTrigger.create({
    //   snap: 0.332,
    // });
  }, [isLoading]);

  return (
    <main id="main">
      {isLoading ? (
        <Loader isLoading={isLoading} setIsLoading={setIsLoading} />
      ) : (
        <>
          <Intro />
          <About />
          <Coding />
        </>
      )}
    </main>
  );
}

export default Main;
