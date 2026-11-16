import ContactForm from '../components/ContactForm.jsx';
import MapEmbed from '../components/MapEmbed.jsx';
import usePageTitle from '../hooks/usePageTitle.js';
import { FAQS, STORE } from '../data/site.js';

export default function Contact() {
  usePageTitle('Contact');

  return (
    <>
      <section className="page-hero container-narrow" aria-labelledby="contact-h">
        <p className="eyebrow">Contact</p>
        <h1 id="contact-h" className="display">
          Say hello
        </h1>
        {/* TODO: store copy */}
        <p className="lead lead--xl">[One line from your Contact content — e.g. questions about an item, gift help or a video shopping visit.]</p>
      </section>

      <section className="container contact-layout" aria-label="Contact form and store details">
        <ContactForm />

        <aside className="contact-aside">
          <div className="card card--lavender">
            <h2 className="h3">Visit the store</h2>
            <dl className="info-list">
              <div>
                <dt>Hours</dt>
                <dd>{STORE.hours}</dd>
              </div>
              <div>
                <dt>Address</dt>
                <dd>
                  {STORE.addressLine1}
                  <br />
                  {STORE.addressLine2}
                </dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>
                  <a href={STORE.phoneHref}>{STORE.phone}</a>
                </dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${STORE.email}`}>{STORE.email}</a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="card card--mint">
            <h2 className="h3">Shop by video call</h2>
            <p>Book a FaceTime or Zoom visit and we’ll walk you through the shelves. We ship anywhere in the US.</p>
            <a className="text-link text-link--dark" href={`mailto:${STORE.email}?subject=Video%20shopping%20visit`}>
              Email to book →
            </a>
          </div>
        </aside>
      </section>

      <section className="container map-block" aria-label="Map">
        <MapEmbed className="map-embed--wide" />
        <a className="btn btn--primary" href={STORE.mapsUrl} target="_blank" rel="noreferrer">
          Get directions
        </a>
      </section>

      <section className="section section--last container-narrow faq" aria-labelledby="faq-h">
        <h2 id="faq-h" className="h2 text-center">
          Good to know
        </h2>
        {FAQS.map((item) => (
          <details key={item.q} className="faq__item">
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </section>
    </>
  );
}
