import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import InformationSection from "./components/Information";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <CTA />
      <InformationSection />
      <Footer />
    </>
  );
}
