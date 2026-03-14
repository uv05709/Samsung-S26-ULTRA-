import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturePromoSection from "../components/FeaturePromoSection";
import GalaxyLineupSection from "../components/GalaxyLineupSection";
import FourSectionImage from "../components/FourSectionImage";
import Categories from "../components/Categories";
import Footer from "../components/Footer";

const Home = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.history.scrollRestoration = "manual";
    } catch {
      // ignore if not supported
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div className="samsung-page">
      <Navbar />
      <Hero />
      <FeaturePromoSection />
      <GalaxyLineupSection />
      <FourSectionImage />
      <Categories />
      <Footer />
    </div>
  );
};

export default Home;
