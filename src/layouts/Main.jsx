import { Intro, About, Coding, Dummy } from '../sections';
import React, { useState } from 'react';
import { ImgLoader } from '../others';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { Loader, VLoader } from '../others';

// gsap.registerPlugin(ScrollTrigger);

function Main() {
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   if (isLoading) return;

  //   ScrollTrigger.create({
  //     trigger: '#intro',
  //     start: 'top top',
  //     pin: true,
  //     pinSpacing: false,
  //   });

  //   ScrollTrigger.create({
  //     trigger: '#about',
  //     start: 'bottom bottom',
  //     pin: true,
  //     pinSpacing: false,
  //   });

  //   // ScrollTrigger.create({
  //   //   snap: 0.332,
  //   // });
  // }, [isLoading]);

  return (
    <main id="main">
      {/* <>
        <ImgLoader setIsLoading={setIsLoading} />
        <Intro isLoading={isLoading} />
        <About />
        <Dummy />
        <Coding />
      </> */}

      {isLoading ? (
        <>
          <ImgLoader setIsLoading={setIsLoading} />
          <Coding />
        </>
      ) : (
        <>
          <Intro isLoading={isLoading} />
          <About />
          <Dummy />
          <Coding />
        </>
      )}
    </main>
  );
}

export default Main;
