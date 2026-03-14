const VaporSection = ({ vaporVideoRef, isVaporPlaying, setIsVaporPlaying, toggleVideoPlayback }) => {
  return (
    <section className="galaxy26-vapor galaxy26-reveal">
      <h3>Play it cool with our largest Vapor Chamber ever</h3>

      <div className="galaxy26-vapor-media galaxy26-reveal">
        <video
          ref={vaporVideoRef}
          src="/Vapor Chamber.webm"
          muted
          playsInline
          loop
          preload="auto"
          onPlay={() => setIsVaporPlaying(true)}
          onPause={() => setIsVaporPlaying(false)}
        />
        <div className="galaxy26-vapor-side">
          <div className="snapdragon-badge">
            <p>Powered by</p>
            <div>Snapdragon 8 Elite</div>
            <span>FOR GALAXY</span>
          </div>
          <button
            aria-label="Play/Pause"
            type="button"
            onClick={() => toggleVideoPlayback(vaporVideoRef, setIsVaporPlaying)}
          >
            {isVaporPlaying ? "II" : ">"}
          </button>
        </div>
      </div>

      <p className="galaxy26-vapor-copy galaxy26-reveal">
        Galaxy S26 Ultra is built for demanding sessions, whether you're running heavy-spec games or using Galaxy AI.
        Powered by Snapdragon 8 Elite Gen 5 for Galaxy, it delivers amplified gaming performance with fast, smooth and
        highly responsive gameplay. And with advanced thermal management from the new Vapor Chamber design, heat is
        dissipated faster and more efficiently than ever before.
      </p>

      <p className="galaxy26-vapor-note galaxy26-reveal">*Copyright COGNOSPHERE. All Rights Reserved.</p>
    </section>
  );
};

export default VaporSection;
