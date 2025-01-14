// server.js

const strapi = require('@strapi/strapi'); // Import Strapi

strapi()
  .start() // Start Strapi
  .then(() => {
    console.log('Strapi is running...');
  })
  .catch((err) => {
    console.error('Error starting Strapi: ', err);
  });
