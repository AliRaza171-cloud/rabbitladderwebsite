// Decorative cloud, echoing the paper clouds hanging in the store.
export default function Cloud({ width = 74, className = '', fill = '#FFFFFF', stroke = '#B4BAD8', style }) {
  const height = Math.round((width * 40) / 74);
  return (
    <svg
      className={`cloud ${className}`}
      width={width}
      height={height}
      viewBox="0 0 74 40"
      aria-hidden="true"
      focusable="false"
      style={style}
    >
      <path
        d="M14 36h46a12 12 0 0 0 1-24 16 16 0 0 0-30-4A11 11 0 0 0 14 36z"
        fill={fill}
        stroke={stroke}
        strokeWidth="2"
      />
    </svg>
  );
}
