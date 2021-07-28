const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const petRoutes = require('./petRoutes');

router.use('/', homeRoutes);
router.use('/pet', petRoutes);
router.use('/api', apiRoutes);

module.exports = router;