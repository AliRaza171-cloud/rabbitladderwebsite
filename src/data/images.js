// =============================================================================
//  ALL SITE PHOTOS — paste image URLs here.
// =============================================================================
//
//  • Fill in `url` with a full link (https://...) or a file in public/media
//    (e.g. '/media/books.jpg').
//  • Leave `url: ''` and the site shows a dashed "photo coming soon" box.
//  • `alt` describes the photo for blind visitors and Google — keep it short.
//  • If a URL is broken, the site falls back to the dashed box automatically.
//
//  Tip: Instagram image links (from "Copy image address") EXPIRE after a few
//  days. Upload photos to an image host (Cloudinary, ImgBB, Imgur…) or into
//  public/media and use that link instead.
// =============================================================================

export const IMAGES = {
  // ---------------------------------------------------------------- HOME PAGE
  home: {
    // Photo next to "A kids store built for kids"
    whoWeAre: {
      url: '/media/store-shelves.jpg',
      alt: 'Shelves of books, plush toys and games inside Rabbit Ladders',
    },

    // "What you'll find" cards (names and ages are in src/data/site.js)
 categories: {
  books: { url: '/media/home1.jpeg', alt: 'Children’s books at Rabbit Ladders' },
  plush: { url: '/media/home2.jpeg', alt: 'Plush toys at Rabbit Ladders' },
  games: { url: '/media/home3.jpeg', alt: 'Games and puzzles at Rabbit Ladders' },
  clothing: { url: '/media/home4.jpeg', alt: 'Kids’ clothing at Rabbit Ladders' },
},

    // "Follow along on Instagram" grid — 6 squares.
    // `link` (optional) = the Instagram post to open when the photo is clicked.
    instagram: [
      { url: '/media/inst1.jpeg', alt: 'Recent Rabbit Ladders Instagram post', link: '' },
      { url: '/media/inst2.jpeg', alt: 'Recent Rabbit Ladders Instagram post', link: '' },
      { url: '/media/inst3.jpeg', alt: 'Recent Rabbit Ladders Instagram post', link: '' },
      { url: '/media/inst4.jpeg', alt: 'Recent Rabbit Ladders Instagram post', link: '' },
      { url: '/media/inst5.jpeg', alt: 'Recent Rabbit Ladders Instagram post', link: '' },
      { url: '/media/inst6.jpeg', alt: 'Recent Rabbit Ladders Instagram post', link: '' },
    ],
  },

  // ----------------------------------------------------------- OUR STORY PAGE
  ourStory: {
    // Wide photo under "Who we are."
    banner: {
      url: '/media/store-interior.jpg',
      alt: 'The clothing table, toy shelves and cloud decorations inside Rabbit Ladders',
    },

    // Photo next to "Wendy & Ben Goodman"
    founders: { url: '', alt: 'Wendy and Ben Goodman inside Rabbit Ladders' },

    // Tilted photo next to the quote — Wendy's crayon drawing if available
    crayonDrawing: { url: '', alt: 'Wendy’s childhood crayon drawing of a rabbit ladder' },

    // "Moments from the shop" gallery — 6 photos.
    // Photos 1 and 4 are the tall ones, so portrait photos work best there.
    gallery: [
      { url: '', alt: 'Moment from the shop' }, // 1 (tall)
      { url: '', alt: 'Moment from the shop' }, // 2
      { url: '', alt: 'Moment from the shop' }, // 3
      { url: '', alt: 'Moment from the shop' }, // 4 (tall)
      { url: '', alt: 'Moment from the shop' }, // 5
      { url: '', alt: 'Moment from the shop' }, // 6
    ],
  },
};
