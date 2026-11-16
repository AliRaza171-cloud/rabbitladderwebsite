// Store details used across the site. Edit here and every page updates.

export const STORE = {
  name: 'Rabbit Ladders',
  legalName: 'Rabbit Ladders, Inc.',
  tagline: 'Let Your Imagination Run Wild',
  hours: 'Daily, 11am – 5pm',
  addressLine1: '860 S. Pacific Coast Hwy, #107',
  addressLine2: 'The Point, El Segundo, CA 90245',
  phone: '310-726-9688',
  phoneHref: 'tel:+13107269688',
  email: 'info@rabbitladders.com',
  // TODO: replace with the store's real Instagram profile URL and handle.
  instagramUrl: 'https://www.instagram.com/rabbitladders/',
  instagramHandle: 'instagram handle',
  mapsUrl: 'https://maps.google.com/?q=Rabbit+Ladders+El+Segundo',
  // Google Maps → Share → Embed a map → only the link inside src="..."
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2776.832894620157!2d-118.39734752503664!3d33.90246237321366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b9814ca3e97d%3A0xfe21b439a81ba45d!2sRabbit%20Ladders!5e1!3m2!1sen!2s!4v1794813479065!5m2!1sen!2s',
};
// "Website by ..." credit in the footer
export const SITE_CREDIT = {
  name: 'ARITSOL',
  url: 'https://your-company-website.com', // TODO: paste your company website
};
export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Our Story', to: '/our-story' },
  { label: 'Insta', href: STORE.instagramUrl },
  { label: 'Contact', to: '/contact' },
  { label: 'NeeDoh Drawing Rules', to: '/needoh-drawing-rules' },
];

export const MARQUEE_ITEMS = [
  'Open daily 11am – 5pm',
  'The Point, El Segundo',
  'We ship anywhere in the US',
  'Shop with us over FaceTime or Zoom',
];

// TODO: confirm categories and fill in ages/sizes with the store.
// `id` links each card to its photo in src/data/images.js (home.categories).
export const CATEGORIES = [
  { id: 'books', name: 'Books', meta: '[Ages]' },
  { id: 'plush', name: 'Plush & Cuddly', meta: '[Ages]' },
  { id: 'games', name: 'Games & Puzzles', meta: '[Ages]' },
  { id: 'clothing', name: 'Kids’ Clothing', meta: '[Sizes]' },
];

export const VIDEO_VISIT_STEPS = [
  {
    title: 'Book a video visit',
    text: 'Email us to pick a time for a FaceTime or Zoom appointment.',
  },
  {
    title: 'Shop with our team',
    text: 'We show you around and help you choose the perfect gift.',
  },
  {
    title: 'We ship it to you',
    text: 'Anywhere in the US, ready to unwrap.',
  },
];

export const CONTACT_TOPICS = [
  'Question about an item',
  'Book a FaceTime or Zoom shopping visit',
  'Help choosing a gift',
  'Something else',
];

// TODO: answers to come from the store.
export const FAQS = [
  { q: 'Where do I park at The Point?', a: '[Your answer]' },
  { q: 'How does shipping work?', a: '[Your answer]' },
  { q: 'Do you offer gift wrapping?', a: '[Your answer]' },
];