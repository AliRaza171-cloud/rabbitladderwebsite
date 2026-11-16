// Small inline SVG icons. All are decorative (aria-hidden) — give the
// surrounding button or link its own accessible label.

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: 'false',
};

export function InstagramIcon({ size = 20 }) {
  return (
    <svg {...base} width={size} height={size} viewBox="0 0 24 24" strokeWidth="1.9">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function PinIcon({ size = 18 }) {
  return (
    <svg {...base} width={size} height={size} viewBox="0 0 24 24" strokeWidth="1.8">
      <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

export function MenuIcon({ size = 24 }) {
  return (
    <svg {...base} width={size} height={size} viewBox="0 0 24 24" strokeWidth="2">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon({ size = 24 }) {
  return (
    <svg {...base} width={size} height={size} viewBox="0 0 24 24" strokeWidth="2">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function ImageIcon({ size = 28 }) {
  return (
    <svg {...base} width={size} height={size} viewBox="0 0 24 24" strokeWidth="1.6">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  );
}

export function LadderIcon({ width = 40, height = 40, strokeWidth = 2.2 }) {
  return (
    <svg {...base} width={width} height={height} viewBox="0 0 40 40" strokeWidth={strokeWidth}>
      <path d="M13 4 L9 36" />
      <path d="M27 4 L31 36" />
      <path d="M12 11 H28" />
      <path d="M11 19 H29" />
      <path d="M10 27 H30" />
    </svg>
  );
}

export function BunnyIcon({ size = 40 }) {
  return (
    <svg {...base} width={size} height={size} viewBox="0 0 40 40" strokeWidth="2.2">
      <path d="M14 18c-2-8-1-14 1-14s3 6 2 13" />
      <path d="M24 17c1-7 3-13 5-12s0 7-3 13" />
      <ellipse cx="20" cy="27" rx="10" ry="9" />
      <circle cx="16.5" cy="25" r="1" fill="currentColor" />
      <circle cx="23.5" cy="25" r="1" fill="currentColor" />
    </svg>
  );
}

export function QuoteIcon() {
  return (
    <svg aria-hidden="true" focusable="false" width="54" height="40" viewBox="0 0 54 40" fill="currentColor">
      <path d="M0 40V22C0 9 7 2 20 0l2 6c-7 2-11 6-11 13h10v21zm32 0V22C32 9 39 2 52 0l2 6c-7 2-11 6-11 13h10v21z" />
    </svg>
  );
}
