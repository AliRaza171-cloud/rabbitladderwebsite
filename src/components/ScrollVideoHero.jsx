import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

/**
 * Full-bleed hero where the walk-in video is "scrubbed" by scrolling:
 * the section is ~3 screens tall, the video sticks to the viewport, and the
 * scroll position inside the section sets video.currentTime.
 *
 * The video file is encoded with every frame as a keyframe (-g 1) so seeking
 * stays smooth. Re-encode new footage the same way:
 *   ffmpeg -i in.mp4 -an -c:v libx264 -crf 24 -g 1 -pix_fmt yuv420p -movflags +faststart hero-walkin.mp4
 */
export default function ScrollVideoHero({ videoSrc, posterSrc }) {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const introRef = useRef(null);
  const welcomeRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return undefined;

    let frame = 0;
    let primed = false;

    const clamp = (n, min, max) => Math.min(max, Math.max(min, n));

    const update = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const scrollable = Math.max(1, rect.height - window.innerHeight);
      const progress = clamp(-rect.top / scrollable, 0, 1);

      if (video.duration && Number.isFinite(video.duration)) {
        const target = progress * (video.duration - 0.05);
        if (Math.abs(video.currentTime - target) > 0.01) video.currentTime = target;
      }

      if (introRef.current) {
        const o = clamp(1 - progress * 3.2, 0, 1);
        introRef.current.style.opacity = String(o);
        introRef.current.style.transform = `translateY(${-progress * 60}px)`;
        introRef.current.style.visibility = o < 0.02 ? 'hidden' : 'visible';
      }
      if (welcomeRef.current) {
        welcomeRef.current.style.opacity = String(clamp((progress - 0.62) / 0.25, 0, 1));
      }
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${progress})`;
      }
    };

    const requestUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    // iOS Safari only allows seeking after the video has been "touched" once.
    const prime = () => {
      if (primed) return;
      primed = true;
      const p = video.play();
      if (p && typeof p.then === 'function') {
        p.then(() => video.pause()).catch(() => {});
      }
    };

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    window.addEventListener('touchstart', prime, { passive: true, once: true });
    video.addEventListener('loadedmetadata', requestUpdate);
    requestUpdate();

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      window.removeEventListener('touchstart', prime);
      video.removeEventListener('loadedmetadata', requestUpdate);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section ref={sectionRef} className="hero-scroll" aria-label="Step inside Rabbit Ladders">
      <div className="hero-scroll__sticky">
        <video
          ref={videoRef}
          className="hero-scroll__video"
          src={videoSrc}
          poster={posterSrc}
          muted
          playsInline
          preload="auto"
          aria-label="Walking in through the doors of Rabbit Ladders"
        />
        <div className="hero-scroll__scrim" aria-hidden="true" />

        <div ref={introRef} className="hero-scroll__intro">
          <div className="hero-scroll__copy">
            <p className="eyebrow eyebrow--light">A kids store built for kids · El Segundo, CA</p>
            <h1 className="hero-scroll__title">Let Your Imagination Run Wild</h1>
            {/* TODO: replace with the store's welcome line */}
            <p className="hero-scroll__lead">[One-line welcome from your Home content]</p>
            <div className="btn-row">
              <Link className="btn btn--primary" to="/contact">
                Plan your visit
              </Link>
              <a className="btn btn--outline-light" href="#shop-anywhere">
                Shop by video call
              </a>
            </div>
          </div>
          <div className="scroll-cue" aria-hidden="true">
            <span>Scroll to step inside</span>
            <svg width="26" height="40" viewBox="0 0 26 40" fill="none" stroke="#FFFFFF" strokeWidth="2">
              <rect x="1" y="1" width="24" height="38" rx="12" />
              <path className="scroll-cue__dot" d="M13 9v7" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        <div ref={welcomeRef} className="hero-scroll__welcome" aria-hidden="true">
          <span className="eyebrow eyebrow--light">Step inside</span>
          <span className="hero-scroll__welcome-title">Welcome to Rabbit Ladders</span>
        </div>

        <div className="hero-scroll__progress" aria-hidden="true">
          <div ref={barRef} className="hero-scroll__bar" />
        </div>
      </div>
    </section>
  );
}
