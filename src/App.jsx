import { useEffect, useRef, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import MockImage from "./components/MockImage";

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function Section({ id, children, style = {}, className = "" }) {
  const ref = useReveal();
  return (
    <section
      id={id}
      ref={ref}
      className={`reveal ${className}`}
      style={{ padding: "5rem 2rem", maxWidth: 900, margin: "0 auto", ...style }}
    >
      {children}
    </section>
  );
}

const STACK = ["Flutter", "React", "Python", "Dart", "Tailwind", "FastAPI", "Vite", "Figma", "Git"];

function StackIcon({ label }) {
  return <div className="stack-icon">{label}</div>;
}

function ProjectCard({ n, title, desc }) {
  return (
    <div
      style={{
        background: "var(--card-pink)",
        borderRadius: 16,
        padding: "1.25rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        minHeight: 260,
      }}
    >
      <span
        style={{
          fontFamily: '"Instrument Serif", serif',
          fontSize: "2.5rem",
          lineHeight: 1,
          color: "#c47a6a",
        }}
      >
        {n}
      </span>
      <p style={{ fontSize: "0.75rem", color: "#5a3a33", lineHeight: 1.6 }}>
        {desc}
      </p>
      <div style={{ marginTop: "auto" }}>
        <MockImage height={90} />
      </div>
    </div>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <LoadingScreen onDone={() => setLoaded(true)} />}

      <div
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.8s ease 0.2s",
          pointerEvents: loaded ? "all" : "none",
        }}
      >
        <Navbar />

        <Section id="sobre">
          <div style={{ display: "flex", gap: "2.5rem", alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ flexShrink: 0, width: 130 }}>
              <MockImage width={130} height={130} style={{ borderRadius: 12 }} />
            </div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <h2
                style={{
                  fontFamily: '"Instrument Serif", serif',
                  fontSize: "clamp(1.6rem, 5vw, 2.4rem)",
                  marginBottom: "0.5rem",
                  lineHeight: 1.2,
                }}
              >
                Olá!
              </h2>
              <p
                style={{
                  fontFamily: '"Instrument Serif", serif',
                  fontSize: "1.1rem",
                  fontStyle: "italic",
                  marginBottom: "1rem",
                  color: "#555",
                }}
              >
                Meu nome é Éshiley Garim, ou{" "}
                <span style={{ color: "var(--accent)" }}>eshpuff</span> se preferir.
              </p>
              <p
                style={{
                  fontSize: "0.78rem",
                  lineHeight: 1.9,
                  color: "#444",
                  maxWidth: 480,
                }}
              >
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla!!
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla...
                bla bla bla bla bla bla bla bla bla bla
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla!
              </p>
            </div>
          </div>
        </Section>

        <div style={{ background: "var(--section-orange)", padding: "1px 0" }}>
          <Section id="projetos">
            <h2
              style={{
                fontFamily: '"Instrument Serif", serif',
                fontSize: "clamp(2.5rem, 8vw, 4rem)",
                marginBottom: "2rem",
              }}
            >
              Projetos
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                gap: "1.25rem",
              }}
            >
              <ProjectCard
                n="1"
                title="Projeto Alpha"
                desc="bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla..."
              />
              <ProjectCard
                n="2"
                title="Projeto Beta"
                desc="bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla..."
              />
              <ProjectCard
                n="3"
                title="Projeto Gama"
                desc="bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla..."
              />
            </div>
          </Section>
        </div>

        <Section id="stack">
          <h2
            style={{
              fontFamily: '"Instrument Serif", serif',
              fontSize: "clamp(2.5rem, 8vw, 4rem)",
              marginBottom: "2rem",
            }}
          >
            Stack
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {STACK.map((s) => (
              <StackIcon key={s} label={s} />
            ))}
          </div>
        </Section>

        <div style={{ background: "#eee8f8", padding: "1px 0" }}>
          <Section id="building">
            <h2
              style={{
                fontFamily: '"Instrument Serif", serif',
                fontSize: "clamp(2.5rem, 8vw, 4rem)",
                marginBottom: "2rem",
              }}
            >
              Building
            </h2>
            <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", alignItems: "center" }}>
              <div style={{ flex: 1, minWidth: 220 }}>
                {[
                  {
                    n: "01",
                    title: "Currently researching",
                    desc: "Detalhes em breve.",
                  },
                  {
                    n: "02",
                    title: "Clean Architectures",
                    desc: "Pensando em como estruturar projetos que crescem sem virar uma bagunça.",
                  },
                ].map((item) => (
                  <div
                    key={item.n}
                    style={{
                      display: "flex",
                      gap: "1rem",
                      marginBottom: "1.5rem",
                      background: "white",
                      borderRadius: 12,
                      padding: "1rem 1.25rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Instrument Serif", serif',
                        fontSize: "1.4rem",
                        color: "var(--muted)",
                        flexShrink: 0,
                        lineHeight: 1,
                        paddingTop: 2,
                      }}
                    >
                      {item.n}
                    </span>
                    <div>
                      <p style={{ fontSize: "0.8rem", fontWeight: 500, marginBottom: "0.3rem" }}>
                        {item.title}
                      </p>
                      <p style={{ fontSize: "0.72rem", color: "#666", lineHeight: 1.6 }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ flexShrink: 0 }}>
                <MockImage
                  width={220}
                  height={160}
                  style={{ borderRadius: 20, boxShadow: "0 12px 40px rgba(0,0,0,0.12)" }}
                />
              </div>
            </div>
          </Section>
        </div>

        <Section id="contato" style={{ textAlign: "center" }}>
          <h2
            style={{
              fontFamily: '"Instrument Serif", serif',
              fontSize: "clamp(2.5rem, 8vw, 4rem)",
              marginBottom: "2.5rem",
            }}
          >
            Contato
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.6rem",
              alignItems: "center",
            }}
          >
            {["email", "github", "linkedin", "sei lá o que mais"].map((link) => (
              <a
                key={link}
                href="#"
                style={{
                  fontFamily: '"DM Mono", monospace',
                  fontSize: "0.78rem",
                  color: "#555",
                  textDecoration: "none",
                  letterSpacing: "0.08em",
                  transition: "color 0.2s",
                }}
                onMouseOver={(e) => (e.target.style.color = "var(--accent)")}
                onMouseOut={(e) => (e.target.style.color = "#555")}
              >
                {link}
              </a>
            ))}
          </div>
        </Section>

        <footer
          style={{
            textAlign: "center",
            padding: "4rem 2rem 2rem",
            borderTop: "1px dashed #ccc",
          }}
        >
          <h2
            style={{
              fontFamily: '"Instrument Serif", serif',
              fontSize: "clamp(2rem, 6vw, 3.5rem)",
              fontStyle: "italic",
              color: "#bbb",
              marginBottom: "2rem",
            }}
          >
            Tchau!
          </h2>
          <MockImage
            style={{ margin: "0 auto", borderRadius: 16, maxWidth: 600 }}
            width="100%"
            height={140}
          />
          <p
            style={{
              marginTop: "2rem",
              fontSize: "0.65rem",
              color: "#bbb",
              letterSpacing: "0.1em",
            }}
          >
            © {new Date().getFullYear()} eshpuff
          </p>
        </footer>
      </div>
    </>
  );
}