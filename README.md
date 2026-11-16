# Rabbit Ladders — website (frontend)

React + Vite frontend for the Rabbit Ladders redesign: Home (scroll-driven walk-in video), Our Story, Contact and NeeDoh Drawing Rules.

## Run it

Requires Node.js 18 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:5173.

Build for production with `npm run build` (output in `dist/`), and preview the build with `npm run preview`.

## Project structure

```
public/media/            hero video, poster and store photos
src/
  api/client.js          calls to the backend (/api/contact, /api/newsletter)
  components/            Header, Footer, ScrollVideoHero, forms, icons…
  data/images.js         ALL photo URLs — paste image links here
  data/site.js           store info, menu, categories, FAQs — edit content here
  data/needohRules.js    NeeDoh promotion summary + official rules
  pages/                 Home, OurStory, Contact, NeeDohRules, NotFound
  styles/global.css      all styles and color tokens
```

## Adding photos

Every photo on the site is listed in **`src/data/images.js`**. Paste a link into `url` and save:

```js
founders: { url: 'https://i.ibb.co/abc123/wendy-ben.jpg', alt: 'Wendy and Ben Goodman inside Rabbit Ladders' },
```

- Empty `url` → the dashed "photo coming soon" box shows.
- Broken link → the box shows "Image link not working" (and a warning in the browser console).
- Local files work too: put `books.jpg` in `public/media/` and use `url: '/media/books.jpg'`.
- Instagram "Copy image address" links expire after a few days. Upload photos to an image host (Cloudinary, ImgBB, Imgur) or to `public/media/` instead.

## Still to fill in

Search the code for `TODO` and `[` placeholders:

- Home page welcome line and "What you'll find" intro
- Product categories and their ages/sizes (`src/data/site.js`)
- Instagram profile URL and handle (`src/data/site.js`)
- Photos: paste URLs into `src/data/images.js`
- Contact intro line and FAQ answers
- Map embed on Home and Contact
- Footer credit "Website by [Your company]"

**Before launch:** the images in `public/media/` were made from Google Maps photos for the pitch. Replace them with the store's own photos and footage.

## Backend (planned: Node.js + Express)

The frontend already sends form data to these endpoints. In development, Vite forwards `/api/*` to `http://localhost:5000`.

| Method | Path              | Body                                   | Used by                 |
| ------ | ----------------- | -------------------------------------- | ----------------------- |
| POST   | `/api/contact`    | `{ name, email, topic, message }`      | Contact page form       |
| POST   | `/api/newsletter` | `{ email }`                            | Footer newsletter form  |

Return `2xx` with JSON on success, or a non-2xx status with `{ "message": "..." }` on error. Until the backend exists, the forms show a friendly error message.

If the API runs on a different domain in production, set `VITE_API_URL` (e.g. `https://api.rabbitladders.com`) in a `.env` file.

## Replacing the hero video

The scroll effect needs every frame to be a keyframe so seeking is smooth:

```bash
ffmpeg -i new-walkthrough.mp4 -an -c:v libx264 -crf 24 -g 1 -pix_fmt yuv420p -movflags +faststart public/media/hero-walkin.mp4
ffmpeg -i public/media/hero-walkin.mp4 -frames:v 1 -q:v 3 public/media/hero-poster.jpg
```
