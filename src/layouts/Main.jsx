import { Intro, About, Coding, Dummy } from '../sections';
import React, { useState } from 'react';
import { ImgLoader } from '../others';

function Main() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <main id="main">
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
