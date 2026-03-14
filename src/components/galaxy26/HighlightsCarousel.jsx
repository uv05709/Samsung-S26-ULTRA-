const HighlightsCarousel = ({
  slides,
  activeIndex,
  setActiveIndex,
  prevIndex,
  nextIndex,
  headingRef,
  sectionRef,
  leftRef,
  centerRef,
  rightRef,
  leftVideoRef,
  rightVideoRef,
  videosRef,
  directionRef,
}) => {
  return (
    <section className="galaxy26-highlights galaxy26-reveal" id="galaxy26-features" ref={sectionRef}>
      <div className="galaxy26-highlights-inner">
        <div className="galaxy26-headline" ref={headingRef}>
          <p>{slides[activeIndex].kTitle}</p>
          <h2>{slides[activeIndex].title}</h2>
        </div>

        <div className="galaxy26-video-stage">
          <article className="galaxy26-side-card left" ref={leftRef}>
            <video ref={leftVideoRef} src={slides[prevIndex].src} muted playsInline preload="metadata" />
          </article>

          <article className="galaxy26-center-card" ref={centerRef}>
            {slides.map((slide, i) => (
              <video
                key={slide.src}
                ref={(el) => {
                  videosRef.current[i] = el;
                }}
                src={slide.src}
                muted
                playsInline
                preload="metadata"
                loop
                onLoadedMetadata={(e) => {
                  e.currentTarget.currentTime = 0;
                  e.currentTarget.pause();
                }}
                className={i === activeIndex ? "active" : ""}
              />
            ))}
          </article>

          <article className="galaxy26-side-card right" ref={rightRef}>
            <video ref={rightVideoRef} src={slides[nextIndex].src} muted playsInline preload="metadata" />
          </article>
        </div>

        <div className="galaxy26-dots">
          {slides.map((item, i) => (
            <button
              key={item.title}
              className={i === activeIndex ? "active" : ""}
              onClick={() => {
                directionRef.current = i > activeIndex ? 1 : -1;
                setActiveIndex(i);
              }}
              aria-label={`Show ${item.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsCarousel;
