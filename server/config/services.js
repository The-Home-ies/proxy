module.exports = {
  // photoCarousel: {
  //   api: '/photo-carousel/:id/photos',
  //   url: 'http://localhost:3001',
  //   bundle: '/photo-carousel/:id/bundle.js',
  // },
  // reservations: {
  //   api: '/listings/:id',
  //   url: 'http://localhost:3002',
  //   bundle: '/listings/:id/build/bundle.js',
  // },
  // reviews: {
  //   api: '/review-listings/:id/reviews',
  //   url: 'http://localhost:3003',
  //   bundle: '/:id/bundle.js',
  // },
  // placesToStay: {
  //   api: '/rooms/:id/places',
  //   url: 'http://localhost:3004',
  //   bundle: '/rooms/:id/main.js',
  // },
  photoCarousel: {
    api: '/',
    url: 'http://54.241.52.191:3001',
    bundle: '/:id/bundle.js',
  },
  reservations: {
    api: '/:id',
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
    url: 'http://18.144.8.147:3004',
    bundle: '/:id/main.js',
  },
};
