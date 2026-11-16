import Cloud from '../components/Cloud.jsx';
import Placeholder from '../components/Placeholder.jsx';
import { BunnyIcon, LadderIcon, QuoteIcon } from '../components/Icons.jsx';
import usePageTitle from '../hooks/usePageTitle.js';
import { STORE } from '../data/site.js';
import { IMAGES } from '../data/images.js';

export default function OurStory() {
  usePageTitle('Our Story');

  return (
    <>
      {/* Who we are */}
      <section className="page-hero container-narrow" aria-labelledby="who-h">
        <Cloud width={110} className="float page-hero__cloud page-hero__cloud--left" />
        <Cloud width={84} className="float float--delay page-hero__cloud page-hero__cloud--right" />
        <p className="eyebrow">Our Story</p>
        <h1 id="who-h" className="display">
          Who we are.
        </h1>
        <p className="lead lead--xl">Rabbit Ladders is a kids store built for kids, aimed to empower and enrich the lives of its customers.</p>
      </section>

      <div className="banner-image">
        <Placeholder image={IMAGES.ourStory.banner} label="Store photo" className="photo--flat" />
      </div>

      {/* The team */}
      <section className="section container split" aria-labelledby="team-h">
        <div className="split__media split__media--badge">
          <Placeholder image={IMAGES.ourStory.founders} ratio="4 / 5" label="Instagram photo — Wendy & Ben" />
          <span className="badge-pill">Mother &amp; son</span>
        </div>
        <div className="split__text">
          <p className="eyebrow">The team</p>
          <h2 id="team-h" className="h2">
            Wendy &amp; Ben Goodman
          </h2>
          <p className="body-lg">
            Rabbit Ladders is owned and operated by the mother and son team of Wendy Goodman and Ben Goodman. They bring their passions for working
            with kids, fashion and the community to Los Angeles.
          </p>
          <ul className="chips" aria-label="What they bring">
            <li className="chip">Working with kids</li>
            <li className="chip chip--mint">Fashion</li>
            <li className="chip">Community</li>
          </ul>
        </div>
      </section>

      {/* Story behind the name */}
      <section className="band band--lavender" aria-labelledby="name-h">
        <div className="container stack-xl">
          <div className="section-head section-head--split section-head--bottom">
            <div className="section-head__text">
              <p className="eyebrow">The story behind the name</p>
              <h2 id="name-h" className="h1">
                Based on a true story
              </h2>
            </div>
            <p className="body-lg story-intro">
              Rabbit Ladders is based on a true story from Wendy’s childhood. She was always an entrepreneur with a vivid imagination.
            </p>
          </div>

          <ol className="grid grid--story">
            <li className="story-card">
              <div className="story-card__top">
                <span className="story-card__label">Detroit, age five</span>
                <BunnyIcon />
              </div>
              <p>At five years old, Wendy saw that there were rabbits in her family’s Detroit-area neighborhood.</p>
            </li>
            <li className="story-card">
              <div className="story-card__top">
                <span className="story-card__label">Door to door</span>
                <LadderIcon />
              </div>
              <p>
                In an attempt to help friends and neighbors better play with these furry strangers, she decided to walk door to door and sell imaginary
                Rabbit Ladders for the rabbits to climb through the kitchen windows and eat carrots from the refrigerator.
              </p>
            </li>
            <li className="story-card story-card--accent">
              <div className="story-card__top">
                <span className="story-card__label">A nickel a piece</span>
                <span className="story-card__nickel" aria-hidden="true">
                  5¢
                </span>
              </div>
              <p>With a crayon drawing of her concept in hand, she was able to sell her creations for a nickel a piece.</p>
            </li>
          </ol>

          <div className="story-quote">
            <Placeholder image={IMAGES.ourStory.crayonDrawing} ratio="4 / 3" className="placeholder--tilt" label="Wendy’s crayon drawing — or an Instagram photo" />
            <blockquote className="quote">
              <QuoteIcon />
              <p>It’s this kind of imagination, creativity and child-like whimsy that Rabbit Ladders is all about.</p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section section--last container" aria-labelledby="gallery-h">
        <div className="section-head section-head--split">
          <h2 id="gallery-h" className="h2">
            Moments from the shop
          </h2>
          <a className="text-link" href={STORE.instagramUrl} target="_blank" rel="noreferrer">
            See more on Instagram →
          </a>
        </div>
        <div className="gallery">
          {IMAGES.ourStory.gallery.map((photo, i) => (
            <Placeholder key={i} image={photo} showIcon={false} className={i === 0 || i === 3 ? 'gallery__tall' : ''} />
          ))}
        </div>
      </section>
    </>
  );
}
