const express = require('express');
const router = express.Router();
const { crawlUrls } = require('../controllers/crawlerController');

router.post('/start', crawlUrls);

module.exports = router;
