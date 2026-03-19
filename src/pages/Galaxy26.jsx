import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GalaxyHero from "../components/galaxy26/GalaxyHero";
import OfferStrip from "../components/galaxy26/OfferStrip";
import IntroDark from "../components/galaxy26/IntroDark";
import HighlightsCarousel from "../components/galaxy26/HighlightsCarousel";
import SpecsTeaser from "../components/galaxy26/SpecsTeaser";
import PerformanceSection from "../components/galaxy26/PerformanceSection";
import PrivacySection from "../components/galaxy26/PrivacySection";
import VaporSection from "../components/galaxy26/VaporSection";
import BatteryCompare from "../components/galaxy26/BatteryCompare";
import StorageSection from "../components/galaxy26/StorageSection";
import NightographySection from "../components/galaxy26/NightographySection";
import SpaceZoomSection from "../components/galaxy26/SpaceZoomSection";
import SelfieSection from "../components/galaxy26/SelfieSection";
import AiSparkSection from "../components/galaxy26/AiSparkSection";
import PhotoAssistSection from "../components/galaxy26/PhotoAssistSection";
import BixbySection from "../components/galaxy26/BixbySection";
import KnoxSection from "../components/galaxy26/KnoxSection";
import OneUiSection from "../components/galaxy26/OneUiSection";
import FindSection from "../components/galaxy26/FindSection";
import EcosystemSection from "../components/galaxy26/EcosystemSection";
import AccessoriesSection from "../components/galaxy26/AccessoriesSection";
import InnovationSection from "../components/galaxy26/InnovationSection";
import WhatsInBoxSection from "../components/galaxy26/WhatsInBoxSection";
import FaqSection from "../components/galaxy26/FaqSection";
import { galaxy26Slides, galaxy26PrivacySlides } from "../data/galaxy26Data";

const Galaxy26 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [privacyIndex, setPrivacyIndex] = useState(0);
  const headingRef = useRef(null);
  const videosRef = useRef([]);
  const leftRef = useRef(null);
  const centerRef = useRef(null);
  const rightRef = useRef(null);
  const highlightsRef = useRef(null);
  const leftVideoRef = useRef(null);
  const rightVideoRef = useRef(null);
  const performanceVideoRef = useRef(null);
  const vaporVideoRef = useRef(null);
  const spaceZoomVideoRef = useRef(null);
  const photoAssistVideoRef = useRef(null);
  const aiSparkVideoRef = useRef(null);
  const privacyMainVideoRef = useRef(null);
  const directionRef = useRef(1);
  const [isPerformancePlaying, setIsPerformancePlaying] = useState(true);
  const [isVaporPlaying, setIsVaporPlaying] = useState(true);
  const [isSpaceZoomPlaying, setIsSpaceZoomPlaying] = useState(true);
  const [isPhotoAssistPlaying, setIsPhotoAssistPlaying] = useState(true);
  const [isHighlightsInView, setIsHighlightsInView] = useState(false);
  const revealRootRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (typeof window !== "undefined") {
      try {
        window.history.scrollRestoration = "manual";
      } catch {
        // ignore if not supported
      }
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname);
      }
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.2,
    });

    const onScroll = () => {
      ScrollTrigger.update();
    };
    lenis.on("scroll", onScroll);

    let rafId = 0;
    let alive = true;
    const raf = (time) => {
      if (!alive) return;
      lenis.raf(time);
      ScrollTrigger.update();
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      alive = false;
      cancelAnimationFrame(rafId);
      lenis.off("scroll", onScroll);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const root = revealRootRef.current || document;
    const cleanups = [];
    const processed = new Set();
    const textSelector = "h1,h2,h3,h4,h5,h6,p,li,summary,figcaption,strong,span";

    const splitToLines = (element) => {
      if (!element || element.children.length > 0) return null;
      const text = element.textContent;
      if (!text || !text.trim()) return null;
      const originalHTML = element.innerHTML;
      const words = text.trim().split(/\s+/);
      element.innerHTML = "";
      const wordSpans = words.map((word, idx) => {
        const span = document.createElement("span");
        span.className = "reveal-word";
        span.textContent = word;
        element.appendChild(span);
        if (idx !== words.length - 1) {
          element.appendChild(document.createTextNode(" "));
        }
        return span;
      });
      let line = document.createElement("span");
      line.className = "reveal-line";
      let currentTop = null;
      const lines = [];
      wordSpans.forEach((span, idx) => {
        const top = span.offsetTop;
        if (currentTop === null) {
          currentTop = top;
          line.appendChild(span);
          if (idx !== words.length - 1) {
            line.appendChild(document.createTextNode(" "));
          }
          return;
        }
        if (Math.abs(top - currentTop) > 2) {
          lines.push(line);
          line = document.createElement("span");
          line.className = "reveal-line";
          currentTop = top;
        }
        line.appendChild(span);
        if (idx !== words.length - 1) {
          line.appendChild(document.createTextNode(" "));
        }
      });
      lines.push(line);
      element.innerHTML = "";
      lines.forEach((lineEl) => element.appendChild(lineEl));
      return () => {
        element.innerHTML = originalHTML;
      };
    };

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".galaxy26-reveal", root).forEach((node) => {
        const el = node;
        if (el.classList.contains("galaxy26-stagger")) {
          const children = Array.from(el.children).filter((child) => child.nodeType === 1);
          if (children.length) {
            gsap.from(children, {
              y: 24,
              autoAlpha: 0,
              duration: 0.7,
              ease: "power2.out",
              stagger: 0.12,
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            });
            return;
          }
        }
        const textTargets = [];
        if (el.matches(textSelector)) {
          textTargets.push(el);
        } else {
          textTargets.push(...el.querySelectorAll(textSelector));
        }
        const uniqueTargets = textTargets.filter((target) => {
          if (processed.has(target)) return false;
          if (!target.textContent || !target.textContent.trim()) return false;
          processed.add(target);
          return true;
        });

        if (uniqueTargets.length) {
          uniqueTargets.forEach((target) => {
            const cleanup = splitToLines(target);
            if (!cleanup) return;
            cleanups.push(cleanup);
            const lines = target.querySelectorAll(".reveal-line");
            gsap.from(lines, {
              y: 28,
              autoAlpha: 0,
              duration: 0.75,
              ease: "power2.out",
              stagger: 0.08,
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            });
          });
          return;
        }

        gsap.fromTo(
          el,
          { y: 36, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, root);

    return () => {
      ctx.revert();
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  useEffect(() => {
    const target = highlightsRef.current;
    if (!target) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHighlightsInView(entry.isIntersecting);
      },
      { threshold: 0.35 }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    videosRef.current.forEach((video, i) => {
      if (!video) return;
      video.pause();
      video.currentTime = 0;
      video.muted = true;
      video.playbackRate = 1;
      video.load();
    });
  }, []);

  useEffect(() => {
    if (!headingRef.current) return;
    gsap.fromTo(
      headingRef.current,
      { y: 26, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.45, ease: "power2.out" }
    );
  }, [activeIndex]);

  useEffect(() => {
    if (!centerRef.current || !leftRef.current || !rightRef.current) return;
    const dir = directionRef.current;
    const fromX = dir > 0 ? 90 : -90;
    const fromSide = dir > 0 ? 60 : -60;

    const tl = gsap.timeline();
    tl.fromTo(
      centerRef.current,
      { x: fromX, opacity: 0.45, scale: 0.98 },
      { x: 0, opacity: 1, scale: 1, duration: 0.48, ease: "power3.out" },
      0
    )
      .fromTo(
        rightRef.current,
        { x: fromSide, opacity: 0.08 },
        { x: 0, opacity: 0.24, duration: 0.48, ease: "power3.out" },
        0
      )
      .fromTo(
        leftRef.current,
        { x: -fromSide, opacity: 0.08 },
        { x: 0, opacity: 0.24, duration: 0.48, ease: "power3.out" },
        0
      );
  }, [activeIndex]);

  useEffect(() => {
    videosRef.current.forEach((video, i) => {
      if (!video) return;
      if (i === activeIndex) {
        if (!isHighlightsInView) {
          video.pause();
          return;
        }
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [activeIndex, isHighlightsInView]);

  useEffect(() => {
    if (leftVideoRef.current) {
      leftVideoRef.current.currentTime = 0;
      leftVideoRef.current.pause();
    }
    if (rightVideoRef.current) {
      rightVideoRef.current.currentTime = 0;
      rightVideoRef.current.pause();
    }
  }, [activeIndex]);

  useEffect(() => {
    if (!isHighlightsInView) return;
    const prefersReducedMotion =
      typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;
    const timer = window.setInterval(() => {
      directionRef.current = 1;
      setActiveIndex((prev) => (prev + 1) % galaxy26Slides.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, [isHighlightsInView]);

  useEffect(() => {
    const items = [
      { ref: performanceVideoRef, setIsPlaying: setIsPerformancePlaying },
      { ref: vaporVideoRef, setIsPlaying: setIsVaporPlaying },
      { ref: spaceZoomVideoRef, setIsPlaying: setIsSpaceZoomPlaying },
      { ref: photoAssistVideoRef, setIsPlaying: setIsPhotoAssistPlaying },
      { ref: aiSparkVideoRef },
      { ref: privacyMainVideoRef },
    ];
    const observers = [];
    items.forEach(({ ref, setIsPlaying }) => {
      const video = ref.current;
      if (!video) return;
      video.pause();
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            video.play().then(() => setIsPlaying?.(true)).catch(() => {});
            return;
          }
          video.pause();
          setIsPlaying?.(false);
        },
        { threshold: 0.45 }
      );
      observer.observe(video);
      observers.push(observer);
    });
    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const prevIndex = useMemo(
    () => (activeIndex - 1 + galaxy26Slides.length) % galaxy26Slides.length,
    [activeIndex]
  );
  const nextIndex = useMemo(
    () => (activeIndex + 1) % galaxy26Slides.length,
    [activeIndex]
  );
  const prevPrivacyIndex = useMemo(
    () => (privacyIndex - 1 + galaxy26PrivacySlides.length) % galaxy26PrivacySlides.length,
    [privacyIndex]
  );
  const nextPrivacyIndex = useMemo(
    () => (privacyIndex + 1) % galaxy26PrivacySlides.length,
    [privacyIndex]
  );

  const toggleVideoPlayback = (videoRef, setIsPlaying) => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
      return;
    }
    video.pause();
    setIsPlaying(false);
  };

  return (
    <div className="galaxy26-page">
      <Navbar />
      <main className="galaxy26-main" ref={revealRootRef}>
        <GalaxyHero />
        <OfferStrip />
        <IntroDark />
        <HighlightsCarousel
          slides={galaxy26Slides}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          prevIndex={prevIndex}
          nextIndex={nextIndex}
          headingRef={headingRef}
          sectionRef={highlightsRef}
          leftRef={leftRef}
          centerRef={centerRef}
          rightRef={rightRef}
          leftVideoRef={leftVideoRef}
          rightVideoRef={rightVideoRef}
          videosRef={videosRef}
          directionRef={directionRef}
        />
        <SpecsTeaser />
        <PerformanceSection
          performanceVideoRef={performanceVideoRef}
          isPerformancePlaying={isPerformancePlaying}
          setIsPerformancePlaying={setIsPerformancePlaying}
          toggleVideoPlayback={toggleVideoPlayback}
        />
        <PrivacySection
          privacySlides={galaxy26PrivacySlides}
          prevPrivacyIndex={prevPrivacyIndex}
          nextPrivacyIndex={nextPrivacyIndex}
          privacyIndex={privacyIndex}
          setPrivacyIndex={setPrivacyIndex}
          mainVideoRef={privacyMainVideoRef}
        />
        <VaporSection
          vaporVideoRef={vaporVideoRef}
          isVaporPlaying={isVaporPlaying}
          setIsVaporPlaying={setIsVaporPlaying}
          toggleVideoPlayback={toggleVideoPlayback}
        />
        <BatteryCompare />
        <StorageSection />
        <NightographySection />
        <SpaceZoomSection
          spaceZoomVideoRef={spaceZoomVideoRef}
          isSpaceZoomPlaying={isSpaceZoomPlaying}
          setIsSpaceZoomPlaying={setIsSpaceZoomPlaying}
          toggleVideoPlayback={toggleVideoPlayback}
        />
        <SelfieSection />
        <AiSparkSection videoRef={aiSparkVideoRef} />
        <PhotoAssistSection
          photoAssistVideoRef={photoAssistVideoRef}
          isPhotoAssistPlaying={isPhotoAssistPlaying}
          setIsPhotoAssistPlaying={setIsPhotoAssistPlaying}
          toggleVideoPlayback={toggleVideoPlayback}
        />
        <BixbySection />
        <KnoxSection />
        <OneUiSection />
        <FindSection />
        <EcosystemSection />
        <AccessoriesSection />
        <InnovationSection />
        <WhatsInBoxSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
};

export default Galaxy26;
