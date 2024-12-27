const express = require('express');
const crawlerRoutes = require('./routes/crawlerRoutes');
const app = express();
const port = 3000;

// Middleware to handle JSON and URL encoded requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/crawl', crawlerRoutes);

// Start server
app.listen(port, () => {
  console.log(`Crawler server running at http://localhost:${port}`);
});
