const { Router } = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const {
  photoCarousel, reservations, reviews, placesToStay,
} = require('../config/services.js');

const router = Router();

router.use(reservations.api,
  createProxyMiddleware({ target: reservations.url, changeOrigin: true }));
router.use(reviews.api,
  createProxyMiddleware({ target: reviews.url, changeOrigin: true }));
router.use(placesToStay.api,
  createProxyMiddleware({ target: placesToStay.url, changeOrigin: true }));
router.use(photoCarousel.api,
  createProxyMiddleware({ target: photoCarousel.url, changeOrigin: true }));

module.exports = router;
