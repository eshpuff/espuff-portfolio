export default function Navbar() {
  const links = ["Sobre", "Projetos", "Stack", "Building", "Contato"];

  return (
    <nav
      style={{
        borderTop: "1px dashed #ccc",
        borderBottom: "1px dashed #ccc",
        padding: "0.75rem 2rem",
        display: "flex",
        justifyContent: "center",
        gap: "3rem",
        position: "sticky",
        top: 0,
        background: "#f5f0e8ee",
        backdropFilter: "blur(8px)",
        zIndex: 100,
      }}
    >
      {links.map((l) => (
        <a key={l} href={`#${l.toLowerCase()}`} className="nav-link">
          {l}
        </a>
      ))}
    </nav>
  );
}