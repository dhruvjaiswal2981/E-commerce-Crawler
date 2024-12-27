# E-commerce Crawler

## Overview

The E-commerce Crawler is a web scraper designed to discover and list all product URLs from multiple e-commerce websites. The crawler works by extracting product page URLs based on a list of provided domains. It utilizes parallel processing for scalability and efficiency, and handles edge cases like dynamic content or variations in URL patterns across different e-commerce platforms.

## Features

- Crawl multiple e-commerce domains concurrently.
- Extract product URLs based on common patterns (`/product/`, `/item/`, `/p/`).
- Scalable and efficient with parallel processing.
- Handles common edge cases like dynamically loaded content.
- Generates a structured list of product URLs for each domain.
- Written in Node.js with Express, utilizing Axios, Cheerio, and other supporting libraries.

## Folder Structure

    ```plaintext
    ecommerce-crawler/
    │
    ├── src/
    │   ├── controllers/
    │   │   ├── crawlerController.js    # Controller for handling crawler requests
    │   ├── services/
    │   │   ├── crawlerService.js       # Logic for crawling the domains
    │   ├── utils/
    │   │   ├── logger.js              # Custom logger for logging info and errors
    │   │   └── fetch.js               # Utility for fetching page links
    │   ├── routes/
    │   │   ├── crawlerRoutes.js       # Routes for the crawler API
    │   ├── app.js                     # Main Express application file
    │   ├── config.js                  # Configuration settings for the app
    ├── .gitignore                     # Git ignore file
    ├── package.json                   # Project dependencies and scripts
    ├── README.md                      # This file
    └── deploy.sh                      # Deployment script for live server

## Installation
- Follow the instructions below to set up the project locally.

1. Clone the Repository
- Clone the project to your local machine using Git:
    ```bash
    https://github.com/dhruvjaiswal2981/E-commerce-Crawler.git
    cd E-commerce-Crawler

2. Install Dependencies
- Install the required dependencies using npm:
    ```bash
    npm install


3. Configuration:

- Ensure that you have configured the domains you want to crawl in the application code.
- Update any other necessary configuration in the config.js file.

4. Start the Development Server
- Run the development server to view the app in your browser:

    ```bash
    node app.js

- This will start the app on http://localhost:3000 by default.
- Crawl product URLs:

Once the server is running, you can start crawling the product URLs by making a request to the endpoint:

    ```bash
    GET http://localhost:3000/api/crawl
    POST http://localhost:3000/api/crawl/start

This request will trigger the crawler to start fetching product URLs for the predefined list of domains.

## Notes
- The crawler detects product URLs by searching for common patterns like /product/, /item/, and /p/. You can customize these patterns in the code as needed for different e-commerce websites.
- The project uses asynchronous requests and handles crawling tasks in parallel for better performance and scalability.


## Deployment
- Live Demo: The application is hosted on Render.
- Access it here: https://e-commerce-crawler.onrender.com/