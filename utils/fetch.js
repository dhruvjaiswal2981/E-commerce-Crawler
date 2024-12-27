const axios = require('axios');
const cheerio = require('cheerio');

const getLinks = async (domain) => {
  try {
    const response = await axios.get(`http://${domain}`);
    const $ = cheerio.load(response.data);
    return $;
  } catch (error) {
    throw new Error(`Failed to fetch ${domain}: ${error.message}`);
  }
};

module.exports = { getLinks };