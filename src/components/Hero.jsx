import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef(null);
  const bannerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const banner = bannerRef.current;

    if (!section || !banner) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      const targetWidth = () => Math.min(1320, window.innerWidth - 32);

      mm.add("(min-width: 1025px)", () => {
        gsap.fromTo(
          banner,
          { width: "100vw", y: 0, borderRadius: "0px" },
          {
            width: () => `${targetWidth()}px`,
            y: 14,
            borderRadius: "2px",
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });

      mm.add("(max-width: 1024px)", () => {
        gsap.set(banner, { clearProps: "all" });
      });

      return () => mm.revert();
    }, section);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === section) {
          trigger.kill();
        }
      });
      ctx.revert();
    };
  }, []);

  return (
    <section className="hero-section" ref={sectionRef}>
      <div className="hero-sticky">
        <div className="hero-banner" ref={bannerRef}>
          <picture className="hero-media">
            <source media="(max-width: 430px)" srcSet="/hero-s26-mobile.webp" />
            <source media="(max-width: 700px)" srcSet="/hero-s26-mobile-2.webp" />
            <source media="(max-width: 900px)" srcSet="/hero-s26-tablet.webp" />
            <source media="(max-width: 1024px)" srcSet="/hero-s26-tablet-2.webp" />
            <source media="(max-width: 1366px)" srcSet="/hero-s26-laptop-sm.webp" />
            <source media="(max-width: 1600px)" srcSet="/hero-s26-laptop.webp" />
            <img
              className="hero-img"
              src="/hero-s26-desktop.webp"
              alt="Galaxy S26 Ultra hero"
              loading="eager"
              fetchPriority="high"
            />
          </picture>
          <div className="hero-copy">
            <div className="hero-actions">
              <a href="/smartphones/galaxy-s26-ultra" className="btn btn-link">
                Learn more
              </a>
              <a href="#" className="btn btn-outline">
                Pre-order
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
