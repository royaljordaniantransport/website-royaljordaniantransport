import React from "react";
import Wrapper from "./layout/Wrapper";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Fleet from "./sections/Fleet";
import Contact from "./sections/Contacts";

import Customer from "./sections/Customer";
import Mission from "./sections/Mission";

const App = () => {
  return (
    <Wrapper>

      <Header />
      <main >
        <Hero />
        <About />
        <Mission />
        <Customer />
        <Services />
        <Fleet />
        <Contact />
      </main>
      <Footer />
    </Wrapper>
  );
};

export default App;

// #0A1C2E
