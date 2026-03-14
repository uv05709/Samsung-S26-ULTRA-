import { FiChevronDown } from "react-icons/fi";

const BuyTopSection = ({ topData }) => {
  return (
    <>
      <section className="buy-product-strip">
        <div className="buy-strip-left">
          {topData.productTabs.map((tab) => (
            <a href={tab.href} className={tab.active ? "active" : ""} key={tab.label}>
              {tab.label}
            </a>
          ))}
        </div>
        <div className="buy-strip-right">
          <span className="stars">{"\u2605\u2605\u2606\u2606\u2606"}</span>
          <span>2.0 (2)</span>
        </div>
      </section>

      <section className="buy-price-strip">
        <div>
          <p className="buy-eyebrow">New</p>
          <h1 className="hubble-price-bar__detail-title">{topData.title}</h1>
        </div>
        <div className="buy-price-cta">
          <p>
            <strong>{topData.priceHeadline}</strong>
          </p>
          <p>
            {topData.priceSub} <span>{topData.priceSave}</span>
          </p>
          <button>Pre-order</button>
        </div>
      </section>

      <section className="buy-mini-tabs">
        <a href="#buy-features">Features</a>
        <a href="#buy-compare">Compare</a>
        <a href="#buy-offers">Offers &amp; Benefits</a>
      </section>

      <section className="buy-benefit-bar">
        <p>{topData.benefitText}</p>
        <div className="buy-countdown">
          <strong>06 : 02 : 56</strong>
          <span>HOURS &nbsp;&nbsp; MINS &nbsp;&nbsp; SECS</span>
        </div>
        <FiChevronDown />
      </section>
    </>
  );
};

export default BuyTopSection;
