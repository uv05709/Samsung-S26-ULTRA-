import ScrollReveal from "./ScrollReveal";

const FourSectionImage = () => {
  return (
    <ScrollReveal className="four-section-wrap" y={24} duration={0.8}>
      <section className="four-section-banner reveal-item">
        <div className="four-section-copy">
          <h2>2025 AI TVs</h2>
          <p>Explore new AI TVs</p>
          <div className="four-section-actions">
            <a href="#">Learn more</a>
            <a href="#" className="four-view-all">
              View all
            </a>
          </div>
        </div>
        <img src="/4section.avif" alt="2025 AI TVs" loading="lazy" />
      </section>
    </ScrollReveal>
  );
};

export default FourSectionImage;
