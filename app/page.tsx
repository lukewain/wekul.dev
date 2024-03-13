'use client';

import Image from "next/image";
import { useState } from "react";
import Typewriter from "react-ts-typewriter";

export default function Home() {
  const [typewriterFinished, setTypewriterFinished] = useState(false);
  function showHello() {
//...

function setTypewriterFinishedTrue() {
  setTypewriterFinished(true);
}

//...

setTimeout(setTypewriterFinishedTrue, 500);

//...

function showHello() {
  setTimeout(() => {
    setTypewriterFinished(true as boolean);
  }, 500);
}
  }

  return (
  <main className="flex min-h-screen flex-col items-center font-mono justify-start p-24">
    <div className="z-10 max-w-5xl w-full items-center justify-center text-sm lg:flex">
      {/* Create typewriter in text */}
      <div id="header" className="justify-center lsitems-center mt-10 mb-10">
        <h1 className="flex justify-center text-4xl dark:text-white">
          <Typewriter text='wekul.dev' speed={90} onFinished={showHello}/>
        </h1>
      </div>
    </div>
    <div>
      { typewriterFinished && <h2 className="text-xl mt-10 mr-4">Hi, I'm Luke</h2> }
    </div>
  </main>
  );
}
