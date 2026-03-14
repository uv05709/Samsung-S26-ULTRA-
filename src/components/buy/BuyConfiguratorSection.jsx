import { useEffect, useMemo, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiGift } from "react-icons/fi";

const BuyConfiguratorSection = ({ configData }) => {
  const gallery = useMemo(() => {
    if (configData.gallery && configData.gallery.length) {
      return configData.gallery;
    }
    return [{ type: "image", src: configData.heroImage, alt: configData.heroAlt }];
  }, [configData]);
  const [activeMedia, setActiveMedia] = useState(0);
  const [selectedDevice, setSelectedDevice] = useState(
    Math.max(
      0,
      configData.deviceOptions.findIndex((item) => item.active)
    )
  );
  const [selectedStorage, setSelectedStorage] = useState(
    Math.max(
      0,
      configData.storagePlans.findIndex((item) => item.active)
    )
  );
  const [selectedColor, setSelectedColor] = useState(
    Math.max(
      0,
      configData.colors.findIndex((item) => item.active)
    )
  );

  useEffect(() => {
    setActiveMedia(0);
  }, [gallery]);

  const handlePrev = () => {
    setActiveMedia((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  const handleNext = () => {
    setActiveMedia((prev) => (prev + 1) % gallery.length);
  };

  const currentMedia = gallery[activeMedia];

  return (
    <section className="buy-main-layout">
      <div className="buy-gallery-panel">
        <h2>Available on samsung.com</h2>
        <div className="buy-gallery-wrap">
          <button className="gallery-nav" type="button" aria-label="Previous image" onClick={handlePrev}>
            <FiChevronLeft />
          </button>
          {currentMedia?.type === "video" || currentMedia?.src?.endsWith(".webm") ? (
            <video src={currentMedia.src} muted playsInline loop autoPlay preload="metadata" />
          ) : (
            <img src={currentMedia.src} alt={currentMedia.alt || configData.heroAlt} />
          )}
          <button className="gallery-nav" type="button" aria-label="Next image" onClick={handleNext}>
            <FiChevronRight />
          </button>
        </div>
        <div className="gallery-dots">
          {gallery.map((item, idx) => (
            <button
              key={`${item.src}-${idx}`}
              type="button"
              className={idx === activeMedia ? "active" : ""}
              aria-label={`Show media ${idx + 1}`}
              onClick={() => setActiveMedia(idx)}
            />
          ))}
        </div>
        <button className="view-more-btn">View more</button>
      </div>

      <aside className="buy-config-panel">
        <div className="feature-pills">
          {configData.featurePills.map((pill) => (
            <span key={pill}>{pill}</span>
          ))}
        </div>

        <div className="config-block">
          <h3>Device</h3>
          <p>What's the best fit for you?</p>
          {configData.deviceOptions.map((item, idx) => (
            <button
              type="button"
              className={`option-card ${selectedDevice === idx ? "active" : ""}`}
              key={item.name}
              onClick={() => setSelectedDevice(idx)}
            >
              <div>
                <strong>{item.name}</strong>
                <p>{item.display}</p>
              </div>
              <div>
                <strong>{item.price}</strong>
                <p>{item.sub}</p>
              </div>
            </button>
          ))}
          <a href="#" className="blue-link">
            {configData.rewardText}
          </a>
        </div>

        <div className="config-block">
          <h3>Storage</h3>
          <p>How much storage do you need?</p>
          {configData.storagePlans.map((plan, idx) => (
            <button
              type="button"
              key={plan.label}
              className={`option-card ${selectedStorage === idx ? "active" : ""}`}
              onClick={() => setSelectedStorage(idx)}
            >
              <div>
                <strong>{plan.label}</strong>
                {selectedStorage === idx ? <p>Limited Time Only</p> : null}
              </div>
              <div>
                <strong>{plan.price}</strong>
                <p>{plan.sub}</p>
              </div>
            </button>
          ))}
          <a href="#" className="blue-link">
            {configData.storagePromoText}
          </a>
        </div>

        <div className="benefit-card">
          <FiGift />
          <div>
            <strong>Sign in to avail benefits worth Rs 5498</strong>
            <p>- Charger at Rs 300 worth Rs 2999</p>
            <p>- Earn reward points worth Rs 2799</p>
          </div>
        </div>

        <div className="config-block">
          <h3>Colour</h3>
          <p>Select your favorite colour.</p>
          <div className="color-grid">
            {configData.colors.map((color, idx) => (
              <button
                type="button"
                key={color.name}
                className={`color-item ${selectedColor === idx ? "active" : ""}`}
                onClick={() => setSelectedColor(idx)}
              >
                <span style={{ backgroundColor: color.hex }} />
                {color.name}
              </button>
            ))}
          </div>
        </div>
      </aside>
    </section>
  );
};

export default BuyConfiguratorSection;
