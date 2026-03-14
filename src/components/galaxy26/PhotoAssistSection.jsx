const PhotoAssistSection = ({
  photoAssistVideoRef,
  isPhotoAssistPlaying,
  setIsPhotoAssistPlaying,
  toggleVideoPlayback,
}) => {
  return (
    <section className="galaxy26-photo-assist galaxy26-reveal">
      <div className="photo-assist-header galaxy26-reveal">
        <p>GALAXY AI</p>
        <h3>Photo Assist. Studio-level edits. Built in</h3>
      </div>
      <div className="photo-assist-card galaxy26-reveal">
        <video
          ref={photoAssistVideoRef}
          src="/Photo Assist..webm"
          muted
          playsInline
          loop
          preload="auto"
          onPlay={() => setIsPhotoAssistPlaying(true)}
          onPause={() => setIsPhotoAssistPlaying(false)}
        />
        <button
          type="button"
          aria-label="Play/Pause"
          onClick={() => toggleVideoPlayback(photoAssistVideoRef, setIsPhotoAssistPlaying)}
        >
          {isPhotoAssistPlaying ? "II" : ">"}
        </button>
      </div>
      <p className="photo-assist-copy galaxy26-reveal">
        Get quick and easy photo editing with just a few words and AI. Add objects, such as accessories on photos of
        your pet by naturally describing the edits you wish to make, and Galaxy AI will realize your vision in minutes.
      </p>
    </section>
  );
};

export default PhotoAssistSection;
