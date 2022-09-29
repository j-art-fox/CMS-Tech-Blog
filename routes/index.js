const router = require('express').Router();
const apiRoutes = require('./api');
const htmlRoutes = require('./api copy');

route.use("/api", apiRoutes);
route.use("*", htmlRoutes);



module.exports = router;