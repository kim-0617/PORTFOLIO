import { Intro, About, Coding, Dummy } from '../sections';
import React from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { Loader, VLoader } from '../others';

// gsap.registerPlugin(ScrollTrigger);

function Main() {
  // const [isLoading, setIsLoading] = useState(false);

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
      {/* {isLoading ? (
        <VLoader isLoading={isLoading} setIsLoading={setIsLoading} />
      ) : (
        <>
          <Intro />
          <About />
          <Coding />
        </>
      )} */}
      <Intro />
      <About />
      <Dummy />
      <Coding />
    </main>
  );
}

export default Main;
