const PerformanceSection = ({
  performanceVideoRef,
  isPerformancePlaying,
  setIsPerformancePlaying,
  toggleVideoPlayback,
}) => {
  return (
    <>
      <section className="galaxy26-performance galaxy26-reveal">
        <p>PERFORMANCE</p>
        <h3>Our most powerful processor, customized for Galaxy</h3>
      </section>

      <section className="galaxy26-performance-video galaxy26-reveal">
        <video
          ref={performanceVideoRef}
          src="/galaxy-s26-ultra-features-highlights-performance-a.webm"
          muted
          playsInline
          loop
          preload="auto"
          onPlay={() => setIsPerformancePlaying(true)}
          onPause={() => setIsPerformancePlaying(false)}
        />
        <button
          aria-label="Play/Pause"
          className="play-btn"
          type="button"
          onClick={() => toggleVideoPlayback(performanceVideoRef, setIsPerformancePlaying)}
        >
          {isPerformancePlaying ? "II" : ">"}
        </button>
      </section>

      <section className="galaxy26-performance-copy galaxy26-reveal" id="galaxy26-specs">
        <p>
          Meet the latest and most powerful processor ever on Galaxy. It's engineered to unlock the full potential of
          Galaxy AI for heavy multitaskers, powering a customized image enhancer that sharpens and smooths visuals
          across apps and content in real time.
        </p>
        <div className="perf-stats galaxy26-stagger galaxy26-reveal">
          <article>
            <h4>NPU</h4>
            <strong>39%</strong>
            <span>faster AI performance</span>
          </article>
          <article>
            <h4>GPU</h4>
            <strong>24%</strong>
            <span>improved graphics performance</span>
          </article>
          <article>
            <h4>CPU</h4>
            <strong>19%</strong>
            <span>faster processing</span>
          </article>
        </div>
      </section>
    </>
  );
};

export default PerformanceSection;
