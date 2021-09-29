import React from "react"

import Title from "./basicBlocks/Title"
import About from "./basicBlocks/About";
import Recipients from "./basicBlocks/Recipients";
import Results from "./basicBlocks/Results";
import ContentList from "./basicBlocks/ContentList";
import Selling from "./basicBlocks/Selling";
import Footer from "./basicBlocks/Footer";
import SellingModal from "./basicBlocks/SellingModal";

export enum SellType {
  X = 1,
  Black,
  Premium
}

export default function App() {
  const [isOpen, setIsOpen] = React.useState(false)

  const [sellType, setType] = React.useState(SellType.X)

  function showModal(type: SellType) {
    setType(type)
    setIsOpen(true)
  }

  return (
    <>
      <Title />
      <About />
      <Recipients />
      <Results />
      <ContentList />
      <Selling showModal={showModal} />
      <Footer />
      <SellingModal isOpen={isOpen} sellType={sellType} setIsOpen={setIsOpen} />
    </>
  );
}


/*




      <Title/>
      <About/>
      <Recipients/>
      <Results/>
      <ContentList/>
      <Selling/>
      <Footer/>




*/
