module.exports = {
  photoCarousel: {
    api: '/photo-carousel/:id/photos',
    url: 'http://54.241.52.191:3001',
    bundle: '/:id/bundle.js',
  },
  reservations: {
    api: '/listings/:id',
    url: 'http://54.151.102.122',
    bundle: '/:id/build/bundle.js',
  },
  reviews: {
    api: '/review-listings/:id/reviews',
    url: 'http://54.183.244.149:3003',
    bundle: '/:id/bundle.js',
  },
  placesToStay: {
    api: '/:id/places',
    url: 'http://54.177.32.2',
    bundle: '/:id/main.js',
  },
};
