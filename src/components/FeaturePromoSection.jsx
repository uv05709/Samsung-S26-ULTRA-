import ScrollReveal from "./ScrollReveal";

const FeaturePromoSection = () => {
  return (
    <ScrollReveal className="feature-promo-section" y={24} duration={0.75}>
      <div className="feature-promo-banner reveal-item">
        <div className="feature-promo-actions">
          <a href="#" className="btn btn-link-dark">
            Learn more
          </a>
          <a href="#" className="btn btn-outline-dark">
            Pre-order
          </a>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default FeaturePromoSection;
