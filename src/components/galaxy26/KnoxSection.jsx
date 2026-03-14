const KnoxSection = () => {
  return (
    <section className="galaxy26-knox galaxy26-reveal">
      <div className="knox-hero">
        <div className="knox-copy galaxy26-reveal">
          <h3>Privacy by default. Protected by Knox</h3>
          <p>We are committed to protecting your information, while providing transparency about how it is used and shared.</p>
        </div>
        <div className="knox-media galaxy26-reveal">
          <img src="/Privacy by default. Protected by Knox.jpg" alt="Samsung Knox shield" />
        </div>
      </div>
      <div className="knox-cards galaxy26-stagger galaxy26-reveal">
        <article className="knox-card galaxy26-reveal">
          <h4>On-device Protection</h4>
          <p>
            Our Personal Data Engine gathers and processes your personal data safely. Then it encrypts that data and
            saves it onto your device with KEEP and Knox Vault, making it harder for anyone else to gain access.
          </p>
        </article>
        <article className="knox-card galaxy26-reveal">
          <h4>Tailored Controls</h4>
          <p>Take control over your Galaxy AI. You decide where it gets processed, either on-device or in the cloud.</p>
        </article>
        <article className="knox-card galaxy26-reveal">
          <h4>Connected Security</h4>
          <p>
            Knox Matrix Trust Chain technology provides security across Galaxy connected devices so you can monitor the
            security of other devices right from your Galaxy smartphone.
          </p>
        </article>
      </div>
    </section>
  );
};

export default KnoxSection;
