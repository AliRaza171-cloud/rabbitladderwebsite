import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Watermark from './Watermark.jsx';

// Scrolls to the top on page change, or to #section when the URL has a hash.
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
}

export default function Layout() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollManager />
      <Header overlay={isHome} />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <Watermark />
    </>
  );
}
