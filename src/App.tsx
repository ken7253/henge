import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Contents from "./components/Contents";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Contents />
      <Footer />
    </>
  );
};

export default App;