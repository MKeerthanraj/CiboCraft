const express = require('express');
const apiRoutes = require('./backend/src/api/routes/apiRoutes');

const app = express();

// Set up your other middleware and configurations as needed

// Use the API routes
app.use('/api', apiRoutes);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});