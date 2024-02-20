const express = require('express');
const { getMedias, uploadMedia } = require('../controllers/fileController');

const router = express.Router();

router.get('/getMedia', getMedias);
router.post('/postMedia', uploadMedia);

module.exports = router;