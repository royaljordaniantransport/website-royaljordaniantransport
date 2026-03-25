import React from "react";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Services from "../sections/Services";
import Fleet from "../sections/Fleet";
import Contact from "../sections/Contacts";
import Customer from "../sections/Customer";
import Mission from "../sections/Mission";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Mission />
      <Customer />
      <Services />
      <Fleet />
      <Contact />
    </main>
  );
};

export default Home;
