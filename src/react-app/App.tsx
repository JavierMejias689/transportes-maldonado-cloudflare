import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ClientLogos from "./components/ClientLogos";
import Services from "./components/Services";
import ImpactNumbers from "./components/ImpactNumbers";
import WhyUs from "./components/WhyUs";
import Fleet from "./components/Fleet";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import FloatingBubbles from "./components/FloatingBubbles";

export default function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <ClientLogos />
      <Services />
      <ImpactNumbers />
      <WhyUs />
      <Fleet />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
      <FloatingBubbles />
    </>
  );
}