const Card = ({ title, text, linkLabel = "Learn more", className = "", compact = false }) => {
  return (
    <article className={`ui-card ${compact ? "ui-card-compact" : ""} ${className}`.trim()}>
      <h3>{title}</h3>
      {text ? <p>{text}</p> : null}
      <a href="#">{linkLabel}</a>
    </article>
  );
};

export default Card;
