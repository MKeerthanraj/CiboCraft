const express = require('express');
const router = express.Router();

const axios = require('axios');

router.get('/', async (req, res) => {
  try {
    // Make a request to the external API
    // const response = await axios.get('https://external-api.com/data');

    // Process the response as needed
    // const processedData = response.data;

    // Send the processed data back as a response
    res.json("Hello World!");
  } catch (error) {
    // Handle any errors that occur during the request or processing
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;