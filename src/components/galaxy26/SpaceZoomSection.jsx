const SpaceZoomSection = ({
  spaceZoomVideoRef,
  isSpaceZoomPlaying,
  setIsSpaceZoomPlaying,
  toggleVideoPlayback,
}) => {
  return (
    <section className="galaxy26-space-zoom galaxy26-reveal">
      <div className="space-zoom-copy galaxy26-reveal">
        <h3>Space Zoom. See the unseen</h3>
        <p>
          Bring far away into focus, from 1x optical perfection to staggering 100x AI-powered Space Zoom - stabilizing
          your view and enhancing clarity instantly.
        </p>
      </div>
      <div className="space-zoom-media galaxy26-reveal">
        <video
          ref={spaceZoomVideoRef}
          src="/Space Zoom. See the unseen.webm"
          muted
          playsInline
          loop
          preload="auto"
          onPlay={() => setIsSpaceZoomPlaying(true)}
          onPause={() => setIsSpaceZoomPlaying(false)}
        />
        <div className="space-zoom-overlay">
          <div className="zoom-scale">
            <span>.6</span>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>5</span>
            <span>10</span>
            <span className="active">30</span>
            <span>100</span>
          </div>
          <button
            className="zoom-play"
            type="button"
            aria-label="Play/Pause"
            onClick={() => toggleVideoPlayback(spaceZoomVideoRef, setIsSpaceZoomPlaying)}
          >
            {isSpaceZoomPlaying ? "II" : ">"}
          </button>
        </div>
        <p className="space-zoom-caption">Captured by Galaxy S26 Ultra #withGalaxy</p>
      </div>
    </section>
  );
};

export default SpaceZoomSection;
