import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Cloud from './Cloud.jsx';
import { CloseIcon, InstagramIcon, MenuIcon, PinIcon } from './Icons.jsx';
import { MARQUEE_ITEMS, NAV_LINKS, STORE } from '../data/site.js';

function Marquee() {
  // The list is rendered twice so the loop is seamless; the copy is hidden from screen readers.
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="marquee" aria-label="Store news">
      <div className="marquee__track">
        {items.map((text, i) => (
          <span key={i} className="marquee__item" aria-hidden={i >= MARQUEE_ITEMS.length || undefined}>
            {text}
            <span className="marquee__star" aria-hidden="true">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Header({ overlay = false }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close the mobile menu whenever the page changes.
  useEffect(() => setMenuOpen(false), [location.pathname]);

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <header className={`site-header${overlay ? ' site-header--overlay' : ''}${menuOpen ? ' is-menu-open' : ''}`}>
      <Marquee />

      <div className="site-header__main">
        <div className="site-header__side site-header__side--left">
          <span className="site-header__place">
            <PinIcon />
            The Point, El Segundo
          </span>
          <span className="site-header__address">{STORE.addressLine1}</span>
        </div>

        <div className="site-header__brand">
          <Cloud className="float" />
          <Link to="/" className="logo" aria-label="Rabbit Ladders home">
            <span>RABBIT</span>
            <span>LADDERS</span>
          </Link>
          <Cloud className="float float--delay" width={62} />
        </div>

        <div className="site-header__side site-header__side--right">
          <a className="icon-btn" href={STORE.instagramUrl} target="_blank" rel="noreferrer" aria-label="Rabbit Ladders on Instagram">
            <InstagramIcon />
          </a>
          <a className="btn btn--header" href={`mailto:${STORE.email}?subject=Video%20shopping%20visit`}>
            Book a video visit
          </a>
        </div>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <nav id="main-nav" className="main-nav" aria-label="Main">
        <div className="main-nav__pill">
          {NAV_LINKS.map((item) =>
            item.to ? (
              <NavLink
                key={item.label}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
              >
                {item.label}
              </NavLink>
            ) : (
              <a key={item.label} className="nav-link" href={item.href} target="_blank" rel="noreferrer">
                {item.label}
              </a>
            ),
          )}
          <a className="nav-link nav-link--mobile-cta" href={`mailto:${STORE.email}?subject=Video%20shopping%20visit`}>
            Book a video visit
          </a>
        </div>
      </nav>
    </header>
  );
}
