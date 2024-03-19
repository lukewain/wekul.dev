'use client';

import Image from "next/image";
import { useState } from "react";
import Typewriter from "react-ts-typewriter";
import NavBar from "./components/navigation/navBar";
import { motion } from "framer-motion";

export default function Home() {
  return (
  <main className="p-24">
    <NavBar />
    <div className="text-sm lg:flex">
      {/* Create typewriter in text */}
      <div id="header" className="justify-center lsitems-center ml-30 mt-10 mb-10">
        <h1 id="main-grad" className="flex justify-center text-9xl font-bold">
          wekul.dev
        </h1>
      </div>
    </div>
    <div id="typewriterClass">
      <h2 className="text-xl mt-10 mr-4">Hi, I'm Luke</h2>
    </div>
    {/* <div>
      <h2 className="text-l mt-10 mr-4">I am 19 and do not know what I'm doing here</h2>
    </div> */}
  </main>
  );
}
