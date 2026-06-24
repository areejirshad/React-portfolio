import { useEffect, useRef } from "react";

export default function CursorAura() {
  const auraRef = useRef(null);
  const ringRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer) return undefined;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let auraX = x;
    let auraY = y;
    let ringX = x;
    let ringY = y;
    let frame = 0;

    const interactiveSelector = "a, button, input, textarea, select, [role='button']";

    const onMove = (event) => {
      x = event.clientX;
      y = event.clientY;
      const isInteractive = event.target.closest?.(interactiveSelector);
      document.documentElement.toggleAttribute("data-cursor-active", Boolean(isInteractive));
    };

    const animate = () => {
      auraX += (x - auraX) * 0.07;
      auraY += (y - auraY) * 0.07;
      ringX += (x - ringX) * 0.18;
      ringY += (y - ringY) * 0.18;

      if (auraRef.current) auraRef.current.style.transform = `translate3d(${auraX - 180}px, ${auraY - 180}px, 0)`;
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${ringX - 22}px, ${ringY - 22}px, 0)`;
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${x - 3}px, ${y - 3}px, 0)`;
      frame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
      document.documentElement.removeAttribute("data-cursor-active");
    };
  }, []);

  return (
    <>
      <div ref={auraRef} className="cursor-aura" />
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
}
