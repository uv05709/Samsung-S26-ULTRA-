const BatteryCompare = () => {
  return (
    <section className="galaxy26-battery-compare galaxy26-reveal">
      <h3>See how long Galaxy S26 Ultra's battery lasts</h3>
      <div className="galaxy26-battery-grid galaxy26-stagger galaxy26-reveal">
        <article className="battery-card">
          <h4>Galaxy S26 Ultra</h4>
          <strong>31 hrs</strong>
          <p>of video playback</p>
          <span>Up to</span>
          <b>75%</b>
          <p>charge in around 30 mins</p>
        </article>

        <article className="battery-card comparison">
          <h4>Comparison</h4>
          <strong>1 hr</strong>
          <p>longer video playback</p>
          <span>-</span>
        </article>

        <article className="battery-card muted">
          <h4>Compare with Galaxy S24 Ultra</h4>
          <strong>30 hrs</strong>
          <p>of video playback</p>
          <span>Up to</span>
          <b>69%</b>
          <p>charge in around 30 mins</p>
        </article>
      </div>
    </section>
  );
};

export default BatteryCompare;
