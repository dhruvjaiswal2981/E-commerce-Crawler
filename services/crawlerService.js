const axios = require('axios');
const cheerio = require('cheerio');
const async = require('async');
const _ = require('lodash');
const { getLinks } = require('../utils/fetch');
const { logError, logInfo } = require('../utils/logger');

// This function crawls URLs from a list of domains
const crawlProductUrls = async (domains) => {
  const results = {};

  // Parallel processing of domains
  await async.eachLimit(domains, 5, async (domain) => {
    logInfo(`Crawling domain: ${domain}`);

    const productUrls = await crawlDomain(domain);
    results[domain] = _.uniq(productUrls);  // Remove duplicate URLs
  });

  return results;
};

// This function crawls an individual domain
const crawlDomain = async (domain) => {
  const productUrls = [];
  const visitedUrls = new Set();

  try {
    // Fetch the initial page
    const $ = await getLinks(domain);
    const links = $('a');

    // Extract and filter product URLs
    $(links).each((index, element) => {
      const href = $(element).attr('href');
      if (isProductUrl(href) && !visitedUrls.has(href)) {
        visitedUrls.add(href);
        productUrls.push(href);
      }
    });
  } catch (error) {
    logError(`Error crawling ${domain}: ${error.message}`);
  }

  return productUrls;
};

// A function that detects product URLs by simple heuristics (this can be customized based on website)
const isProductUrl = (url) => {
  const productPatterns = ['/product/', '/item/', '/p/'];
  return productPatterns.some((pattern) => url.includes(pattern));
};

module.exports = { crawlProductUrls };
