import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MotionSetup() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray("[data-reveal]").forEach((element) => {
        gsap.fromTo(element, { y: 26, opacity: 0 }, {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 84%" },
        });
      });

      gsap.utils.toArray(".story-step").forEach((card) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            end: "bottom 18%",
            scrub: true,
          },
        });

        tl.fromTo(card, { opacity: 0.34, y: 34, scale: 0.99 }, { opacity: 1, y: 0, scale: 1, duration: 0.28, ease: "none" })
          .to(card, { opacity: 1, y: 0, scale: 1, duration: 0.58, ease: "none" })
          .to(card, { opacity: 0.78, y: -18, scale: 0.997, duration: 0.14, ease: "none" });
      });

      gsap.to(".hero-portrait img", {
        y: -26,
        rotateY: -1,
        ease: "none",
        scrollTrigger: {
          trigger: ".home-hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.utils.toArray(".floating-stack").forEach((element, index) => {
        gsap.to(element, {
          y: index % 2 ? 16 : -16,
          x: index === 1 ? -8 : 8,
          duration: 4.6 + index * 0.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      gsap.utils.toArray("[data-line]").forEach((line) => {
        gsap.fromTo(line, { opacity: 0.18, y: 16 }, {
          opacity: 1,
          y: 0,
          scrollTrigger: { trigger: line, start: "top 78%", end: "top 48%", scrub: true },
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return null;
}
