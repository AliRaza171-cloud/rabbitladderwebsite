import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle.js';

export default function NotFound() {
  usePageTitle('Page not found');

  return (
    <section className="page-hero container-narrow section--last" aria-labelledby="nf-h">
      <p className="eyebrow">404</p>
      <h1 id="nf-h" className="display">
        This rabbit hopped away.
      </h1>
      <p className="lead lead--xl">We couldn’t find that page.</p>
      <Link className="btn btn--primary" to="/">
        Back to home
      </Link>
    </section>
  );
}
