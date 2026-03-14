const PrivacySection = ({
  privacySlides,
  prevPrivacyIndex,
  nextPrivacyIndex,
  privacyIndex,
  setPrivacyIndex,
  mainVideoRef,
}) => {
  return (
    <>
      <section className="galaxy26-privacy-headline galaxy26-reveal">
        <h3>The world's first Privacy Display on mobile</h3>
      </section>

      <section className="galaxy26-privacy-carousel galaxy26-reveal">
        <article className="galaxy26-privacy-side">
          <video src={privacySlides[prevPrivacyIndex].src} muted playsInline preload="metadata" />
          <button
            type="button"
            aria-label="Previous privacy slide"
            onClick={() => setPrivacyIndex((p) => (p - 1 + privacySlides.length) % privacySlides.length)}
          >
            {"<"}
          </button>
        </article>

        <article className="galaxy26-privacy-main">
          <video
            ref={mainVideoRef}
            key={privacySlides[privacyIndex].src}
            src={privacySlides[privacyIndex].src}
            muted
            playsInline
            loop
            preload="auto"
          />
        </article>

        <article className="galaxy26-privacy-side">
          <video src={privacySlides[nextPrivacyIndex].src} muted playsInline preload="metadata" />
          <button
            type="button"
            aria-label="Next privacy slide"
            onClick={() => setPrivacyIndex((p) => (p + 1) % privacySlides.length)}
          >
            {">"}
          </button>
        </article>
      </section>

      <div className="galaxy26-privacy-dots">
        {privacySlides.map((item, i) => (
          <button
            type="button"
            key={item.src}
            className={i === privacyIndex ? "active" : ""}
            onClick={() => setPrivacyIndex(i)}
            aria-label={`Show privacy slide ${i + 1}`}
          />
        ))}
      </div>

      <section className="galaxy26-privacy-copy galaxy26-reveal">
        <p>
          Meet your built-in privacy screen, only on Galaxy S26 Ultra. Just manually switch on, and Privacy Display
          will use innovative technology to protect your private information by hiding your full screen from other
          people's view. Or, you can choose what you want to hide such as certain apps, all incoming notifications or
          for when you need to enter PINs and passwords in Settings, Lock Screen or Secure Folder.
        </p>
      </section>
    </>
  );
};

export default PrivacySection;
