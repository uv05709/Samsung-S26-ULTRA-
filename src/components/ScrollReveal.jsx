import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({ children, className = "", y = 32, duration = 0.75, stagger = 0.1 }) => {
  const scopeRef = useRef(null);

  useEffect(() => {
    const scope = scopeRef.current;
    if (!scope) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray(".reveal-item");

      if (targets.length) {
        gsap.fromTo(
          targets,
          { autoAlpha: 0, y },
          {
            autoAlpha: 1,
            y: 0,
            duration,
            stagger,
            ease: "power2.out",
            scrollTrigger: {
              trigger: scope,
              start: "top 82%",
              once: true,
            },
          }
        );
      }
    }, scope);

    return () => ctx.revert();
  }, [duration, stagger, y]);

  return (
    <section ref={scopeRef} className={className}>
      {children}
    </section>
  );
};

export default ScrollReveal;
