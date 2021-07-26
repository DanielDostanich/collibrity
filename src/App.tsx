import React from "react"

import Title from "./basicBlocks/Title"
import About from "./basicBlocks/About";
import Recipients from "./basicBlocks/Recipients";
import Results from "./basicBlocks/Results";
import Authors from "./basicBlocks/Authors";
import ContentList from "./basicBlocks/ContentList";
import Selling from "./basicBlocks/Selling";

export default function App() {
  return (
    <>
      <Title/>
      <About/>
      <Recipients/>
      <Results/>
      <Authors/>
      <ContentList/>
      <Selling/>
    </>
  );
}