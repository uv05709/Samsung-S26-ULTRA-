const FaqSection = () => {
  return (
    <section className="galaxy26-faq galaxy26-reveal">
      <h3 className="galaxy26-reveal">Galaxy S26 Ultra Frequently Asked Questions</h3>
      <div className="faq-tabs galaxy26-reveal">
        <button className="active" type="button">
          All
        </button>
        <button type="button">General</button>
        <button type="button">Design</button>
        <button type="button">Performance</button>
        <button type="button">Camera</button>
        <button type="button">AI</button>
        <button type="button">Switching</button>
        <button type="button">What is the best Galaxy for me?</button>
      </div>
      <div className="faq-list galaxy26-stagger galaxy26-reveal">
        <details className="faq-item">
          <summary>What are the key features of Galaxy S26 Ultra?</summary>
          <p>Galaxy S26 Ultra combines Galaxy AI, a pro-grade camera system and a customized processor.</p>
        </details>
        <details className="faq-item">
          <summary>What are the differences between Galaxy S26, S26+ and S26 Ultra?</summary>
          <p>Each model offers distinct screen sizes, camera configurations and battery capacities.</p>
        </details>
        <details className="faq-item">
          <summary>What colors does Galaxy S26 Ultra come in?</summary>
          <p>Color availability can vary by market, carrier and storage option.</p>
        </details>
        <details className="faq-item">
          <summary>How durable is Galaxy S26 Ultra?</summary>
          <p>It features premium materials and advanced protection for everyday use.</p>
        </details>
        <details className="faq-item">
          <summary>Does Galaxy S26 Ultra have a built-in S Pen?</summary>
          <p>Yes, the integrated S Pen is built in for quick access to creative tools.</p>
        </details>
      </div>
    </section>
  );
};

export default FaqSection;
