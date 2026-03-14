const AccessoriesSection = () => {
  return (
    <section className="galaxy26-accessories galaxy26-reveal" id="accessories">
      <p className="eyebrow galaxy26-reveal">ACCESSORIES</p>
      <h3 className="galaxy26-reveal">Show your magnetic style</h3>
      <div className="accessory-card galaxy26-reveal">
        <div className="accessory-copy">
          <h4>Magnet Case</h4>
          <p>New Magnet Cases support wireless charging in slim, stylish designs.</p>
          <a className="text-link" href="#accessories">
            Learn more <span aria-hidden="true">-&gt;</span>
          </a>
        </div>
        <div className="accessory-media" aria-hidden="true">
          <div className="case-stack">
            <div className="case case-dark" />
            <div className="case case-light">
              <span className="case-ring" />
            </div>
            <div className="case case-violet">
              <span className="case-ring" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessoriesSection;
