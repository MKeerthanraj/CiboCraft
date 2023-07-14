const express = require('express');
const axios = require('axios');


const getRecipeByIngredients = async (req, res) => {
    try {

        var headers = {
            'Content-Type' : 'application/json',
            'x-api-key': '1dfc7e5d160a4038a6a0ac0a056beafc'
        }

        // Make a request to the external API
        const response = await axios.get('https://api.spoonacular.com/recipes/findByIngredients', {
            params: req.query,
            headers: headers
        })
        
    
        // Send the processed data back as a response
        res.json(response.data);

      } catch (error) {
        // Handle any errors that occur during the request or processing
        res.status(500).json({ error: error });
      }
};

module.exports = getRecipeByIngredients;