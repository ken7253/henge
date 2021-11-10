import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Contents from "./components/Contents";
import ConfigurationTab from "./components/ConfigurationTab";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Contents />
      <Footer />
    </div>
  );
};

export default App;