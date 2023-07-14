const express = require('express');
const axios = require('axios');

const router = express.Router();

const findRecipeByIngredients = require('../controllers/findByIngredientsController');
const findRecipeByNutrients = require('../controllers/findByNutrientsController');


router.get('/sample', async (req, res) => {
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

router.get('/search/recipe/byNutrients', findRecipeByNutrients);

router.get('/search/recipe/byIngredients', findRecipeByIngredients);

module.exports = router;