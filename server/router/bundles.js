const { Router } = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const {
  photoCarousel, reservations, reviews, placesToStay,
} = require('../config/services.js');

const router = Router();

router.use('/photocarousel.js', createProxyMiddleware({
  target: photoCarousel.url,
  pathRewrite: {
    '^.*': photoCarousel.bundle,
  },
  changeOrigin: true,
}));

router.use('/reservations.js', createProxyMiddleware({
  target: reservations.url,
  pathRewrite: {
    '^.*': reservations.bundle,
  },
  changeOrigin: true,
}));

router.use('/reviews.js', createProxyMiddleware({
  target: reviews.url,
  pathRewrite: {
    '^.*': reviews.bundle,
  },
  changeOrigin: true,
}));

router.use('/placestostay.js', createProxyMiddleware({
  target: placesToStay.url,
  pathRewrite: {
    '^.*': placesToStay.bundle,
  },
  changeOrigin: true,
}));

module.exports = router;
