import { useEffect, useState } from 'react';
import { ImageIcon } from './Icons.jsx';

/**
 * Shows a photo when an image URL is available, otherwise a dashed
 * "photo coming soon" box. If the URL fails to load, it falls back to the box.
 *
 * Usage:
 *   <Placeholder image={IMAGES.ourStory.founders} ratio="4 / 5" label="Wendy & Ben" />
 *   <Placeholder src="/media/photo.jpg" alt="..." />
 */
export default function Placeholder({ image, src, alt, label = 'Instagram photo', ratio, className = '', showIcon = true, style }) {
  const url = (src ?? image?.url ?? '').trim();
  const altText = alt ?? image?.alt ?? '';
  const [failed, setFailed] = useState(false);

  // Try again if the URL changes (e.g. after editing images.js).
  useEffect(() => setFailed(false), [url]);

  if (url && !failed) {
    return (
      <img
        src={url}
        alt={altText}
        loading="lazy"
        decoding="async"
        className={`photo ${className}`}
        style={{ aspectRatio: ratio, ...style }}
        onError={() => {
          if (import.meta.env.DEV) console.warn(`[images] Could not load: ${url}`);
          setFailed(true);
        }}
      />
    );
  }

  return (
    <div
      className={`placeholder ${className}`}
      style={{ aspectRatio: ratio, ...style }}
      role="img"
      aria-label={`Photo coming soon: ${label}`}
    >
      {showIcon && <ImageIcon />}
      <span>{failed ? 'Image link not working' : label}</span>
    </div>
  );
}
