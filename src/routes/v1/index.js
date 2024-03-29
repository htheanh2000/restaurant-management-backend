const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const docsRoute = require('./docs.route');
const menuRoute = require('./menu.route');
const contactRoute = require('./contact.route');
const reservationRoute = require('./reservation.route');
const uploadRoute = require('./upload.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/menu',
    route: menuRoute,
  },
  {
    path: '/upload',
    route: uploadRoute,
  },
  {
    path: '/reservation',
    route: reservationRoute,
  },
  {
    path: '/contact',
    route: contactRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
