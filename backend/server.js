const express = require('express');
const bodyParser = require('body-parser');

const apiRoutes = require('./routes/apiRoutes');

const app = express();

// Set up your other middleware and configurations as needed
app.use(bodyParser.urlencoded({ extended: false }));


// Use the API routes
app.use('/api', apiRoutes);


// Start the server
app.listen(7000, () => {
  console.log('Server is running on port 7000');
});
