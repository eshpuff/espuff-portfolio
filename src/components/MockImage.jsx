export default function MockImage({ width = "100%", height = 120, style = {} }) {
  return (
    <svg
      viewBox="0 0 320 160"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width, height, display: "block", borderRadius: 8, ...style }}
    >

      <rect width="320" height="160" fill="#c9e8f5" />
-
      <ellipse cx="80" cy="50" rx="30" ry="18" fill="white" opacity="0.9" />
      <ellipse cx="100" cy="44" rx="22" ry="15" fill="white" opacity="0.9" />
      <ellipse cx="220" cy="38" rx="20" ry="13" fill="white" opacity="0.8" />
      <ellipse cx="238" cy="34" rx="14" ry="10" fill="white" opacity="0.8" />
-
      <ellipse cx="80" cy="180" rx="120" ry="70" fill="#7bbf6a" />
      <ellipse cx="260" cy="190" rx="110" ry="65" fill="#5fa84e" />
      <ellipse cx="170" cy="195" rx="90" ry="55" fill="#6db85c" />
    </svg>
  );
}