const GalaxyHero = () => {
  return (
    <section className="galaxy26-hero">
      <picture>
        <source media="(max-width: 640px)" srcSet="/hero-s26-mobile.webp" />
        <source media="(max-width: 1024px)" srcSet="/hero-s26-tablet.webp" />
        <img src="/hero-s26-desktop.webp" alt="Galaxy S26 Ultra hero" />
      </picture>
      <div className="galaxy26-hero-copy hero-only-cta galaxy26-reveal">
        <h1 className="sr-only">Galaxy S26 Ultra</h1>
        <div className="hero-cta-wrap">
          <a href="/smartphones/galaxy-s26-ultra/buy" className="hero-cta">
            Buy now
          </a>
        </div>
      </div>
    </section>
  );
};

export default GalaxyHero;
