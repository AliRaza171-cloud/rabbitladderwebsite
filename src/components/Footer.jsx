import { Link } from 'react-router-dom';
import NewsletterForm from './NewsletterForm.jsx';
import { InstagramIcon } from './Icons.jsx';
import { NAV_LINKS, SITE_CREDIT, STORE } from '../data/site.js';

// Cloud-shaped scallops along the top edge of the footer.
function CloudEdge() {
  return (
    <svg className="footer__edge" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <path d="M0,0 H1440 V38 A60,44 0 0 1 1320,38 A60,30 0 0 1 1200,38 A60,48 0 0 1 1080,38 A60,32 0 0 1 960,38 A60,46 0 0 1 840,38 A60,30 0 0 1 720,38 A60,50 0 0 1 600,38 A60,32 0 0 1 480,38 A60,44 0 0 1 360,38 A60,30 0 0 1 240,38 A60,48 0 0 1 120,38 A60,34 0 0 1 0,38 Z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <CloudEdge />

      <div className="container footer__inner">
        <div className="footer__cta">
          <div className="footer__cta-title">
            <svg width="64" height="120" viewBox="0 0 64 120" fill="none" stroke="#B4BAD8" strokeWidth="5" strokeLinecap="round" aria-hidden="true" focusable="false">
              <path d="M14 6 L6 114" />
              <path d="M50 6 L58 114" />
              <path d="M12 26 H52" />
              <path d="M11 48 H53" />
              <path d="M9 70 H55" />
              <path d="M8 92 H57" />
            </svg>
            <h2>Let your imagination run wild.</h2>
          </div>
          <div className="btn-row">
            <Link className="btn btn--lavender" to="/contact">
              Plan your visit
            </Link>
            <a className="btn btn--outline-light" href={`mailto:${STORE.email}?subject=Video%20shopping%20visit`}>
              Book a video visit
            </a>
          </div>
        </div>

        <hr className="footer__rule" />

        <div className="footer__grid">
          <div className="footer__col">
            <Link to="/" className="footer__logo" aria-label="Rabbit Ladders home">
              RABBIT
              <br />
              LADDERS
            </Link>
            <p className="footer__blurb">A kids store built for kids, run by the mother and son team of Wendy and Ben Goodman.</p>
            <a className="icon-btn icon-btn--light" href={STORE.instagramUrl} target="_blank" rel="noreferrer" aria-label="Rabbit Ladders on Instagram">
              <InstagramIcon />
            </a>
          </div>

          <div className="footer__col">
            <h3 className="footer__heading">Visit</h3>
            <address>
              {STORE.addressLine1}
              <br />
              {STORE.addressLine2}
            </address>
            <span className="footer__muted">Open {STORE.hours.toLowerCase()}</span>
          </div>

          <nav className="footer__col footer__links" aria-label="Footer">
            <h3 className="footer__heading">Explore</h3>
            {NAV_LINKS.map((item) =>
              item.to ? (
                <Link key={item.label} to={item.to}>
                  {item.label}
                </Link>
              ) : (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                  {item.label}
                </a>
              ),
            )}
          </nav>

          <div className="footer__col">
            <h3 className="footer__heading">Say hello</h3>
            <a href={STORE.phoneHref}>{STORE.phone}</a>
            <a href={`mailto:${STORE.email}`}>{STORE.email}</a>
            <NewsletterForm />
          </div>
        </div>
      </div>

            {/* Big outlined RABBIT LADDERS — an SVG so it always fits the screen width exactly */}
      <div className="footer__wordmark-wrap" aria-hidden="true">
        <svg viewBox="0 0 1000 110" width="100%" focusable="false" style={{ display: 'block', overflow: 'hidden' }}>
          <text
            x="500"
            y="100"
            textAnchor="middle"
            textLength="960"
            lengthAdjust="spacingAndGlyphs"
            fontFamily="'Josefin Sans', sans-serif"
            fontWeight="600"
            fontSize="118"
            fill="none"
            stroke="rgba(180, 186, 216, 0.45)"
            strokeWidth="1.4"
          >
            RABBIT LADDERS
          </text>
        </svg>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>
            © {year} {STORE.legalName} · El Segundo, California
          </span>
          <span>
            Website by{' '}
            <a className="footer__credit" href={SITE_CREDIT.url} target="_blank" rel="noopener">
              {SITE_CREDIT.name}
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
