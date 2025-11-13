// src/animations/scrollAnimations.js
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const initScrollAnimations = () => {
  // simple fade-in for sections (existing behaviour)
  gsap.utils.toArray("section").forEach((section) => {
    gsap.fromTo(
      section,
      { autoAlpha: 0, y: 60 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  // Parallax depth: find elements with data-depth attributes inside .parallax-container
  gsap.utils.toArray(".parallax-container").forEach((container) => {
    const elements = container.querySelectorAll("[data-depth]");
    if (!elements.length) return;

    // subtle mouse parallax
    container.addEventListener("mousemove", (e) => {
      const rect = container.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      const relY = (e.clientY - rect.top) / rect.height - 0.5;
      elements.forEach((el) => {
        const depth = parseFloat(el.getAttribute("data-depth") || "0.5");
        gsap.to(el, {
          x: relX * 30 * depth,
          y: relY * 20 * depth,
          rotateX: -relY * 6 * depth,
          rotateY: relX * 8 * depth,
          ease: "power3.out",
          duration: 0.9,
        });
      });
    });

    // scroll-driven parallax (vertical offset)
    elements.forEach((el) => {
      const depth = parseFloat(el.getAttribute("data-depth") || "0.5");
      gsap.to(el, {
        y: () => `${-50 * depth}px`,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    });
  });
};
