import { useState } from "react";
import { FiBatteryCharging, FiCamera, FiChevronDown, FiCpu, FiMaximize2 } from "react-icons/fi";

const specIconMap = {
  size: FiMaximize2,
  camera: FiCamera,
  battery: FiBatteryCharging,
  cpu: FiCpu,
};

const BuyAccordionSections = ({ compareModels, compareDetails, faqItems, keySpecs, introTitle, actualSizeImages }) => {
  const [dropdowns, setDropdowns] = useState({
    actualSizes: false,
    keyFeatures: false,
    compareModels: false,
    faq: false,
    reviews: false,
  });
  const [openFaq, setOpenFaq] = useState(null);
  const [showAllSpecs, setShowAllSpecs] = useState(false);

  const toggleDropdown = (key) => {
    setDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const visibleSpecGroups = showAllSpecs ? keySpecs : keySpecs.slice(0, 2);

  return (
    <>
      <section className="buy-intro-block">
        <h3>{introTitle}</h3>
        <p>
          Meet our innovative smartphone with a custom advanced processor, a powerful camera system and more intuitive
          AI for everyday life.
        </p>
      </section>

      <section className="buy-accordion-block" id="buy-features">
        <button className={`accordion-row ${dropdowns.actualSizes ? "open" : ""}`} onClick={() => toggleDropdown("actualSizes")}>
          <span>See actual sizes</span>
          <FiChevronDown />
        </button>
        {dropdowns.actualSizes ? (
          <div className="actual-size-panel accordion-panel">
            <div className={`size-visual ${(actualSizeImages || []).length === 1 ? "single" : ""}`}>
              {(actualSizeImages || []).map((item) => (
                <img key={item.image} src={item.image} alt={item.alt} />
              ))}
            </div>
          </div>
        ) : null}

        <button className={`accordion-row ${dropdowns.keyFeatures ? "open" : ""}`} onClick={() => toggleDropdown("keyFeatures")}>
          <span>Key Features</span>
          <FiChevronDown />
        </button>
        {dropdowns.keyFeatures ? (
          <section className="key-specs-section accordion-panel">
            <h3>Key Specs</h3>
            {visibleSpecGroups.map((group) => {
              const Icon = specIconMap[group.icon] || FiMaximize2;
              return (
                <div className="spec-group" key={group.title}>
                  <h4>{group.title}</h4>
                  {group.rows.map((row) => (
                    <div
                      className="spec-row"
                      key={row[0]}
                      style={{ gridTemplateColumns: row[3] && row[3] !== "-" ? "repeat(3, minmax(0, 1fr))" : "repeat(2, minmax(0, 1fr))" }}
                    >
                      <div className="spec-col">
                        <Icon />
                        <p className="spec-label">{row[0]}</p>
                        <strong>{row[1]}</strong>
                      </div>
                      <div className="spec-col">
                        <Icon />
                        <p className="spec-label">{row[0]}</p>
                        <strong>{row[2]}</strong>
                      </div>
                      {row[3] && row[3] !== "-" ? (
                        <div className="spec-col">
                          <Icon />
                          <p className="spec-label">{row[0]}</p>
                          <strong>{row[3]}</strong>
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              );
            })}
            <button className="view-more-btn specs-more" onClick={() => setShowAllSpecs((prev) => !prev)}>
              {showAllSpecs ? "View less" : "View more"} <FiChevronDown />
            </button>
          </section>
        ) : null}

        <button
          className={`accordion-row ${dropdowns.compareModels ? "open" : ""}`}
          onClick={() => toggleDropdown("compareModels")}
          id="buy-compare"
        >
          <span>Compare the models</span>
          <FiChevronDown />
        </button>
        {dropdowns.compareModels ? (
          <section className="compare-models-section accordion-panel">
            <h3>Compare the models</h3>
            <div className="compare-grid" style={{ gridTemplateColumns: `repeat(${compareModels.length}, minmax(0, 1fr))` }}>
              {compareModels.map((model) => (
                <article key={model.name} className="compare-card">
                  <h4>{model.name}</h4>
                  <img src={model.image} alt={model.name} />
                </article>
              ))}
            </div>
            <div className="compare-details-grid" style={{ gridTemplateColumns: `repeat(${compareDetails.length}, minmax(0, 1fr))` }}>
              {compareDetails.map((item) => (
                <article className="compare-detail-card" key={item.blurb}>
                  <p className="compare-detail-label">Colour</p>
                  <div className="detail-dots">
                    <span />
                    <span />
                    <span />
                    <span className="active" />
                  </div>
                  <p className="selected-color">{item.color}</p>
                  <div className="ai-blurb">{item.blurb}</div>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        <button className={`accordion-row ${dropdowns.faq ? "open" : ""}`} onClick={() => toggleDropdown("faq")}>
          <span>Frequently Asked Questions</span>
          <FiChevronDown />
        </button>
        {dropdowns.faq ? (
          <section className="buy-faq-section accordion-panel">
            <div className="faq-list">
              {faqItems.map((item, idx) => (
                <div className="faq-item" key={item.question}>
                  <button className="faq-row" onClick={() => setOpenFaq(openFaq === idx ? null : idx)}>
                    <span className="faq-q">Q.</span>
                    <span>{item.question}</span>
                    <FiChevronDown className={openFaq === idx ? "rotated" : ""} />
                  </button>
                  {openFaq === idx ? <p className="faq-answer">{item.answer}</p> : null}
                </div>
              ))}
            </div>
          </section>
        ) : null}

        <button className={`accordion-row ${dropdowns.reviews ? "open" : ""}`} onClick={() => toggleDropdown("reviews")}>
          <span>Featured Reviews</span>
          <FiChevronDown />
        </button>
        {dropdowns.reviews ? (
          <section className="buy-featured-row accordion-panel">
            <div className="review-cards">
              <article className="review-card">
                <h4>Great Camera and Battery</h4>
                <p>Powerful zoom and reliable all-day battery performance.</p>
              </article>
              <article className="review-card">
                <h4>Smooth Performance</h4>
                <p>Fast app switching and excellent gaming and multitasking.</p>
              </article>
              <article className="review-card">
                <h4>Premium Design</h4>
                <p>Solid build quality with a clean display and refined feel.</p>
              </article>
            </div>
          </section>
        ) : null}
      </section>

      <section className="buy-legal">
        <p>
          *Images shown here are for representational purpose only, actual may vary. All features, specifications and
          prices are subject to change without prior notice.
        </p>
        <p>*Limited period offer</p>
        <p>*While supplies last. T&amp;Cs apply.</p>
        <p>*Promotion details may vary by region, country or carrier.</p>
      </section>

    </>
  );
};

export default BuyAccordionSections;
