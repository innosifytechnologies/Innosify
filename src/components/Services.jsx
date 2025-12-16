// Services.jsx
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StemEdu from "./StemEdu";
import EngSolutions from "./EngSolutions";
import ITTechnologies from "./ITTechnologies";
import ITClients from "./ITClients";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const mainRef = useRef(null);
  const horizontalRef = useRef(null);

  useLayoutEffect(() => {
    const sections = gsap.utils.toArray(".service-page"); // all full pages

    let ctx = gsap.context(() => {
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1), // Move all pages left
        ease: "none",
        scrollTrigger: {
          trigger: mainRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${horizontalRef.current.scrollWidth}`,
        },
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={mainRef}
      style={{
        height: "100vh",
        overflow: "hidden",
        background: "#111",
      }}
    >
      <div
        ref={horizontalRef}
        style={{
          display: "flex",
          width: "max-content",
          height: "100vh",
        }}
      >
        {/* Full page sections */}
        <ITTechnologies />
        <StemEdu />
        <EngSolutions />
        <ITClients />
      </div>
    </section>
  );
};

export default Services;

