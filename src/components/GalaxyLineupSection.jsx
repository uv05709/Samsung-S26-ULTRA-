import ScrollReveal from "./ScrollReveal";

const lineup = [
  {
    title: "Galaxy S26 | S26+",
    image: "/Galaxy_S26_S26+.avif",
    alt: "Galaxy S26 and S26 Plus",
    cta: "Buy",
    href: "/smartphones/galaxy-s26-ultra/buy/",
  },
  {
    title: "Galaxy Z Fold7",
    image: "/Galaxy Z Fold7.avif",
    alt: "Galaxy Z Fold7",
    cta: "Buy",
    href: "#",
  },
  {
    title: "Galaxy Tab S11 Ultra",
    image: "/Galaxy Tab S11 Ultra.avif",
    alt: "Galaxy Tab S11 Ultra",
    cta: "Buy",
    href: "#",
  },
  {
    title: "Galaxy Watch8",
    image: "/Galaxy Watch8.avif",
    alt: "Galaxy Watch8",
    cta: "Buy",
    href: "#",
  },
];

const GalaxyLineupSection = () => {
  return (
    <ScrollReveal className="lineup-section" y={28} duration={0.8} stagger={0.12}>
      <div className="lineup-grid">
        {lineup.map((item) => (
          <article className="lineup-card reveal-item" key={item.title}>
            <h3>{item.title}</h3>
            <img src={item.image} alt={item.alt} loading="lazy" />
            <a href={item.href} className="lineup-cta" aria-label={`${item.cta} ${item.title}`}>
              {item.cta}
            </a>
          </article>
        ))}
      </div>
    </ScrollReveal>
  );
};

export default GalaxyLineupSection;
