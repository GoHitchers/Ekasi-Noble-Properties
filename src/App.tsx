import React, { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import FeaturedProperties from "./components/FeaturedProperties";
import RentToOwn from "./components/RentToOwn";
import Gallery from "./components/Gallery";
import Events from "./components/Events";
import FAQ from "./components/FAQ";
import Locations from "./components/Locations";
import InvestmentOptions from "./components/InvestmentOptions";
import Projects from "./components/Projects";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Chatbot from "./components/Chatbot";
import "./App.css";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const contactRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  if (loading) {
    return (
      <section className="loader">
        <div>
          <div>
            <span className="one h6"></span>
            <span className="two h3"></span>
          </div>
        </div>
        <div>
          <div>
            <span className="one h1"></span>
          </div>
        </div>
        <div>
          <div>
            <span className="two h2"></span>
          </div>
        </div>
        <div>
          <div>
            <span className="one h4"></span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <div className="pt-[72px]">
        <Hero scrollToContact={scrollToContact} />
      <About />
<FeaturedProperties scrollToContact={scrollToContact} />
<Locations />
<Gallery />
<RentToOwn scrollToContact={scrollToContact} />
<InvestmentOptions />
<Projects scrollToContact={scrollToContact} />
<Team />
<FAQ />
<Events />

<div ref={contactRef}>
  <Contact />
</div>

<Footer />
      </div>

      <ScrollToTop />
      <Chatbot />
    </div>
  );
}

export default App;
