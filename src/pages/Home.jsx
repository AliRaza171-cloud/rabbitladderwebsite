import { Link } from 'react-router-dom';
import ScrollVideoHero from '../components/ScrollVideoHero.jsx';
import Placeholder from '../components/Placeholder.jsx';
import MapEmbed from '../components/MapEmbed.jsx';
import usePageTitle from '../hooks/usePageTitle.js';
import { CATEGORIES, STORE, VIDEO_VISIT_STEPS } from '../data/site.js';
import { IMAGES } from '../data/images.js';

export default function Home() {
  usePageTitle('');

  return (
    <>
      <ScrollVideoHero videoSrc="/media/hero-walkin.mp4" posterSrc="/media/hero-poster.jpg" />

      {/* What you'll find */}
      <section className="section container" aria-labelledby="find-h">
        <div className="section-head section-head--split">
          <div className="section-head__text">
            <p className="eyebrow">On the shelves</p>
            <h2 id="find-h" className="h2">
              What you’ll find
            </h2>
            {/* TODO: store copy */}
            <p className="lead">[Short intro to what the shop carries]</p>
          </div>
          <Link className="text-link" to="/contact">
            Ask about an item →
          </Link>
        </div>

        <div className="grid grid--cards">
          {CATEGORIES.map((cat) => (
            <a key={cat.name} className="category-card" href="#shop-anywhere">
              <Placeholder image={IMAGES.home.categories[cat.id]} ratio="4 / 5" label={`${cat.name} photo`} />
              <div className="category-card__meta">
                <span className="category-card__name">{cat.name}</span>
                <span className="category-card__sub">{cat.meta}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Who we are */}
      <section className="section container split" aria-labelledby="who-h">
        <div className="split__media">
          <Placeholder image={IMAGES.home.whoWeAre} ratio="16 / 11" label="Store photo" className="photo--flat" />
        </div>
        <div className="split__text">
          <p className="eyebrow">Who we are</p>
          <h2 id="who-h" className="h2">
            A kids store built for kids
          </h2>
          <p className="body-lg">
            Rabbit Ladders is aimed to empower and enrich the lives of its customers. It’s owned and operated by the mother and son team of Wendy
            Goodman and Ben Goodman.
          </p>
          <Link className="text-link" to="/our-story">
            Read the story behind the name →
          </Link>
        </div>
      </section>

      {/* Video shopping */}
      <section id="shop-anywhere" className="band band--lavender" aria-labelledby="anywhere-h">
        <div className="container stack-lg">
          <div className="section-head__text">
            <p className="eyebrow">Not nearby?</p>
            <h2 id="anywhere-h" className="h2">
              Shop with us from anywhere
            </h2>
            <p className="lead">Walk the shelves with our team over FaceTime or Zoom, and we’ll ship your finds anywhere in the US.</p>
          </div>

          <ol className="grid grid--steps">
            {VIDEO_VISIT_STEPS.map((step, i) => (
              <li key={step.title} className="step-card">
                <span className="step-card__num" aria-hidden="true">
                  {i + 1}
                </span>
                <h3 className="h4">{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>

          <a className="btn btn--primary btn--start" href={`mailto:${STORE.email}?subject=Video%20shopping%20visit`}>
            Book a video visit
          </a>
        </div>
      </section>

      {/* Instagram */}
      <section className="section container" aria-labelledby="insta-h">
        <div className="section-head section-head--split">
          <div className="section-head__text">
            <p className="eyebrow">New on the shelves</p>
            <h2 id="insta-h" className="h2">
              Follow along on Instagram
            </h2>
          </div>
          <a className="btn btn--outline" href={STORE.instagramUrl} target="_blank" rel="noreferrer">
            @{STORE.instagramHandle}
          </a>
        </div>
        <div className="grid grid--insta">
          {IMAGES.home.instagram.map((post, i) => {
            const tile = <Placeholder image={post} ratio="1 / 1" label="Instagram post" showIcon={false} className="placeholder--sm" />;
            return post.url ? (
              <a key={i} className="insta-tile" href={post.link || STORE.instagramUrl} target="_blank" rel="noreferrer">
                {tile}
              </a>
            ) : (
              <div key={i}>{tile}</div>
            );
          })}
        </div>
      </section>

      {/* Visit */}
      <section className="section section--last container split split--top" aria-labelledby="visit-h">
        <div className="split__text">
          <p className="eyebrow">Come say hi</p>
          <h2 id="visit-h" className="h2">
            Visit the store
          </h2>
          <dl className="info-grid">
            <div>
              <dt>Hours</dt>
              <dd>{STORE.hours}</dd>
            </div>
            <div>
              <dt>Call</dt>
              <dd>
                <a href={STORE.phoneHref}>{STORE.phone}</a>
              </dd>
            </div>
            <div>
              <dt>Find us</dt>
              <dd>
                {STORE.addressLine1}
                <br />
                {STORE.addressLine2}
              </dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${STORE.email}`}>{STORE.email}</a>
              </dd>
            </div>
          </dl>
          <a className="btn btn--primary btn--start" href={STORE.mapsUrl} target="_blank" rel="noreferrer">
            Get directions
          </a>
        </div>
        <MapEmbed />
      </section>
    </>
  );
}
