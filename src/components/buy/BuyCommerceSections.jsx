import { useState } from "react";
import { FiAward, FiChevronRight, FiCreditCard, FiGift, FiHeart, FiMessageCircle, FiRefreshCw, FiTruck } from "react-icons/fi";

const iconMap = {
  award: FiAward,
  gift: FiGift,
  truck: FiTruck,
  refresh: FiRefreshCw,
};

const BuyCommerceSections = ({ carePlans, directBenefits, offers, commerceData }) => {
  const [exchangeChoice, setExchangeChoice] = useState("yes");
  const [selectedCarePlan, setSelectedCarePlan] = useState(null);

  return (
    <>
      <section className="buy-detail-block">
        <h3>Delivery Details</h3>
        <button className="detail-input">
          Enter PIN Code <FiChevronRight />
        </button>
      </section>

      <section className="buy-detail-block">
        <div className="detail-head">
          <h3>Exchange</h3>
          <a href="#">Learn more</a>
        </div>
        <p>{commerceData.exchangeMaxText}</p>
        <div className="exchange-grid">
          <button
            type="button"
            className={`option-card ${exchangeChoice === "yes" ? "active" : ""}`}
            onClick={() => setExchangeChoice("yes")}
          >
            <strong>Yes, please</strong>
            <span>{commerceData.exchangeSaveText}</span>
          </button>
          <button
            type="button"
            className={`option-card ${exchangeChoice === "no" ? "active" : ""}`}
            onClick={() => setExchangeChoice("no")}
          >
            <strong>No, thanks</strong>
          </button>
        </div>
        <p className="exchange-tip">Tell us your current brand to start trade-in!</p>
        <div className="smart-switch-note">
          <div className="switch-icon">S</div>
          <div>
            <strong>How can I move the data on my iPhone to a Samsung Galaxy phone?</strong>
            <p>
              Smart Switch offers a quick and easy way to transfer the data from your old phone - even if it has a
              different OS like an iPhone - onto your new Samsung Galaxy.
            </p>
            <small>*Terms and Conditions apply.</small>
          </div>
        </div>
      </section>

      <section className="buy-detail-block">
        <h3>Samsung Care+</h3>
        <p className="blue-link">Now with unlimited claims starting at Rs 500/mo. with 12 months No Cost EMI</p>
        <div className="care-grid">
          {carePlans.map((plan, idx) => (
            <button
              type="button"
              key={plan.title}
              className={`care-card ${selectedCarePlan === idx ? "active" : ""}`}
              onClick={() => setSelectedCarePlan(idx)}
            >
              <strong>{plan.title}</strong>
              {plan.price ? <span>{plan.price}</span> : null}
            </button>
          ))}
        </div>
      </section>

      <section className="buy-detail-block">
        <h3>Buy direct. Get more.</h3>
        <p>Save more on your purchase.</p>
        <div className="direct-grid">
          {directBenefits.map((item) => {
            const Icon = iconMap[item.icon] || FiGift;
            return (
              <article key={item.title} className="direct-card">
                <div className="direct-icon">
                  <Icon />
                </div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
                <a href="#">Learn more</a>
              </article>
            );
          })}
        </div>
      </section>

      <section className="buy-detail-block box-section">
        <div className="box-left">
          <h3>What's in the box</h3>
          <div className={`box-items ${commerceData.boxItems.length === 1 ? "single" : ""}`}>
            {commerceData.boxItems.map((item) => (
              <div key={item.image}>
                <img src={item.image} alt={item.alt} />
                {item.index ? <span>{item.index}</span> : null}
              </div>
            ))}
          </div>
          <p className="box-footnote">
            1. Smartphone | 2. Data Cable | 3. Ejection Pin
            <br />*Galaxy S26 Ultra does not include travel adapter.
          </p>
        </div>
        <aside className="box-summary">
          <FiHeart />
          <h3>{commerceData.boxSummary.title}</h3>
          <p>{commerceData.boxSummary.sku}</p>
          <p>{commerceData.boxSummary.variant}</p>
          <strong>{commerceData.boxSummary.price}</strong>
          <p className="box-mrp">{commerceData.boxSummary.mrp}</p>
          <p className="box-save">{commerceData.boxSummary.save}</p>
          <p className="box-reward">{commerceData.boxSummary.rewards}</p>
          <button>{commerceData.boxSummary.cta}</button>
          <p className="box-delivery">{commerceData.boxSummary.delivery}</p>
          <p className="box-chat">
            <FiMessageCircle /> Chat with an expert
          </p>
          <div className="box-benefits">
            <span>
              <FiCreditCard /> Financing
            </span>
            <span>
              <FiRefreshCw /> Exchange
            </span>
            <span className="scplus">SC+</span>
          </div>
        </aside>
      </section>

      <section className="buy-detail-block" id="buy-offers">
        <h3>Offers &amp; Benefits</h3>
        <div className="offers-grid">
          {offers.map((offer) => (
            <article key={offer.title} className="offer-benefit-card">
              <h4>{offer.title}</h4>
              {offer.text ? <p>{offer.text}</p> : null}
              <a href="#">Learn more</a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default BuyCommerceSections;
