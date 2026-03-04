import { useEffect, useRef, useState } from "react";

const DURATION_MS = 12000;

export default function LoadingScreen({ onDone }) {
  const [pct, setPct] = useState(0);
  const [exiting, setExiting] = useState(false);
  const barRef = useRef(null);
  const startRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    startRef.current = performance.now();

    const tick = (now) => {
      const elapsed = now - startRef.current;
      const progress = Math.min(elapsed / DURATION_MS, 1);
      const eased = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      const p = Math.round(eased * 100);
      setPct(p);
      if (barRef.current) {
        barRef.current.style.width = `${eased * 100}%`;
      }

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setExiting(true);
          setTimeout(onDone, 700);
        }, 400);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [onDone]);

  return (
    <div className={`loader-screen ${exiting ? "loader-exit" : ""}`}>
      <p className="loader-sub">portfólio</p>
      <h1 className="loader-name">
        esh<span>puff</span>
      </h1>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <div className="loader-bar-wrapper">
          <div className="loader-bar" ref={barRef} />
        </div>
        <span className="loader-pct">{pct}%</span>
      </div>
    </div>
  );
}