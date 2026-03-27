import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const GalaxyHero = () => {
  const sectionRef = useRef(null);
  const heroImageRef = useRef(null);
  const ctaWrapRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    const image = heroImageRef.current;
    const ctaWrap = ctaWrapRef.current;

    if (!section || !image || !ctaWrap) return undefined;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      gsap.set([image, ctaWrap], { clearProps: "all" });
      return undefined;
    }

    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro
        .fromTo(
          image,
          { autoAlpha: 0.58, scale: 1.06 },
          { autoAlpha: 1, scale: 1, duration: 1.2 }
        )
        .fromTo(
          ctaWrap,
          { y: 28, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.72 },
          "-=0.55"
        );

      gsap.to(image, {
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="galaxy26-hero" ref={sectionRef}>
      <h1 className="sr-only">Galaxy S26 Ultra</h1>

      <picture>
        <source media="(max-width: 640px)" srcSet="/hero-s26-mobile.webp" />
        <source media="(max-width: 1024px)" srcSet="/hero-s26-tablet.webp" />
        <img ref={heroImageRef} src="/hero-s26-desktop.webp" alt="Galaxy S26 Ultra hero" />
      </picture>

      <div className="galaxy26-hero-copy hero-only-cta">
        <div className="hero-cta-wrap" ref={ctaWrapRef}>
          <a href="/smartphones/galaxy-s26-ultra/buy" className="hero-cta">
            Buy now <span aria-hidden="true">-&gt;</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GalaxyHero;
