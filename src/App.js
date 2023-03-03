import React from "react";
import Navbar from "./components/Navbar";
import Section_top from "./components/Section_top";
import Ads from "./components/Ads";
import Card_component from "./components/Card_components";
import About from "./components/About";
import Lifestyle from "./components/LifestyleComp";
import InfoSec from "./components/infosection";
import Apply from "./components/Apply";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="App">

      <Navbar />
      <Section_top />
      <Ads />
      <Card_component />
      <About />
      <Lifestyle />
      <InfoSec />
      <Apply />
      <Footer />

    </main>
  );
}

export default App;
