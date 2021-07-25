import React from "react"

import Title from "./basicBlocks/Title"
import About from "./basicBlocks/About";
import Recipients from "./basicBlocks/Recipients";
import Results from "./basicBlocks/Results";

export default function App() {
  return (
    <>
      <Title/>
      <About/>
      <Recipients/>
      <Results/>
    </>
  );
}