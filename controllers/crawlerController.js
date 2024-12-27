const { crawlProductUrls } = require('../services/crawlerService');

const crawlUrls = async (req, res) => {
  const { domains } = req.body;

  if (!Array.isArray(domains) || domains.length === 0) {
    return res.status(400).json({ error: 'Please provide a list of domains.' });
  }

  try {
    const results = await crawlProductUrls(domains);
    return res.status(200).json(results);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to crawl the websites.' });
  }
};

module.exports = { crawlUrls };
