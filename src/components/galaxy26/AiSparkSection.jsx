const AiSparkSection = ({ videoRef }) => {
  return (
    <section className="galaxy26-ai-spark galaxy26-reveal">
      <video ref={videoRef} src="/galaxyAI.webm" muted playsInline loop preload="auto" />
    </section>
  );
};

export default AiSparkSection;
