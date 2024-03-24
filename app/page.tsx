'use client';

import Image from "next/image";
import React from "react";
import { CodeBlock, atomOneDark, atomOneLight, nord, obsidian } from "react-code-blocks"
import NavBar from "./components/navigation/navBar";
import { Button } from "@nextui-org/button"

export default function Home() {
  return (
    <main className="p-24">
      <div className="text-sm lg:flex">
        <div className="flex ml-10 mt-10 mb-10">
          <div className="flex items-center justify-center text-9xl font-bold w-full">
            <h1 id="main-grad" className="text-10xl font-bold text-center">wekul.dev</h1>
          </div>
        </div>
      </div>

      <hr className="mt-5 w-full" style={{
        color: "white",
        backgroundColor: "white",
        opacity: "75%",
        height: 3 // Adjust height as needed
      }} />
      <div className="h-[5rem]" />
      <div className="mt-5 mx-auto w-2/5 content-evenly">
        <CodeBlock
          text={"const name: string = 'Luke';\nvar age: int = 19"}
          language="javascript"
          showLineNumbers={true}
          theme={obsidian}
        />
      </div>
      <div className="h-[2rem]" />
      <div id="buttons" className="mt-10 ml-auto mr-auto mx-auto flex flex-wrap gap-7 w-1/2 justify-center text-2xl">
        <Button color="danger" size="lg" variant="faded" style={{background: "#9099E4", borderRadius: "3px", padding: "6px"}} id="disabledBooton" disabled={false}>
          Home
        </Button>
        <Button color="primary" size="lg" variant="faded" style={{background: "#9099E4", borderRadius: "3px", padding: "6px"}} id="booton">
          About
        </Button>
        <Button color="primary" size="lg" variant="bordered" style={{background: "#9099E4", borderRadius: "3px", padding: "6px"}} id="booton">
          Contact
        </Button>
      </div>
    </main>
  );
}
