import { SITE_CREDIT } from '../data/site.js';

/**
 * "Preview" watermark shown on every page while the client reviews the site.
 * Turn it off for the final site by setting VITE_SHOW_WATERMARK=false in a .env
 * file (or by removing <Watermark /> from Layout.jsx).
 */
const SHOW_WATERMARK = import.meta.env.VITE_SHOW_WATERMARK !== 'false';

// One tile of diagonal text, repeated across the whole screen.
const label = `${SITE_CREDIT.name} · PREVIEW`;
const tile = `
<svg xmlns="http://www.w3.org/2000/svg" width="420" height="260" viewBox="0 0 420 260">
  <g transform="rotate(-24 210 130)" font-family="Josefin Sans, Arial, sans-serif" font-weight="700" text-anchor="middle">
    <text x="210" y="122" font-size="34" letter-spacing="6" fill="rgba(110,116,150,0.20)" stroke="rgba(255,255,255,0.10)" stroke-width="1">${label}</text>
    <text x="210" y="152" font-size="13" letter-spacing="3" fill="rgba(110,116,150,0.22)">DEMO ONLY · NOT FOR PUBLIC USE</text>
  </g>
</svg>`;
const tileUrl = `url("data:image/svg+xml;charset=utf-8,${encodeURIComponent(tile)}")`;

export default function Watermark() {
  if (!SHOW_WATERMARK) return null;

  return (
    <>
      <div className="watermark" aria-hidden="true" style={{ backgroundImage: tileUrl }} />
      <a className="watermark-badge" href={SITE_CREDIT.url} target="_blank" rel="noopener">
        Preview by <strong>{SITE_CREDIT.name}</strong> · Not for public use
      </a>
    </>
  );
}