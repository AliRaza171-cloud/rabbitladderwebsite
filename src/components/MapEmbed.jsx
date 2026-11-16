import { STORE } from '../data/site.js';

/** Live Google Map of the store. The link comes from STORE.mapEmbedUrl in src/data/site.js. */
export default function MapEmbed({ className = '' }) {
  return (
    <div className={`map-embed ${className}`}>
      <iframe
        src={STORE.mapEmbedUrl}
        title="Map showing Rabbit Ladders at The Point, El Segundo"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
