import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BuyAccordionSections from "../components/buy/BuyAccordionSections";
import BuyCommerceSections from "../components/buy/BuyCommerceSections";
import BuyConfiguratorSection from "../components/buy/BuyConfiguratorSection";
import BuyTopSection from "../components/buy/BuyTopSection";
import { buyVariants, commonCarePlans, commonDirectBenefits, commonOffers } from "../components/buy/buyData";

const GalaxyS26Buy = ({ variant = "ultra" }) => {
  const data = buyVariants[variant] || buyVariants.ultra;

  return (
    <div className="buy-page">
      <Navbar forceSolid />

      <main className="buy-wrap premium-buy">
        <BuyTopSection topData={data.top} />
        <BuyConfiguratorSection configData={data.config} />
        <BuyCommerceSections
          carePlans={commonCarePlans}
          directBenefits={commonDirectBenefits}
          offers={commonOffers}
          commerceData={data.commerce}
        />
        <BuyAccordionSections
          compareModels={data.accordion.compareModels}
          compareDetails={data.accordion.compareDetails}
          faqItems={data.accordion.faqItems}
          keySpecs={data.accordion.keySpecs}
          introTitle={`Introducing ${data.top.title}`}
          actualSizeImages={data.accordion.actualSizeImages}
        />
      </main>

      <Footer />
    </div>
  );
};

export default GalaxyS26Buy;
