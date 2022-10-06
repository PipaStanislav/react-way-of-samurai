const { Router } = require('express');
const musicController = require('./music-controller');

const router = Router();

router.get('/', musicController.getMusics);



module.exports = router;