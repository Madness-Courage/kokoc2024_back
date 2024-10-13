const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use('/api/users', userRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const US_PORT = process.env.US_PORT || 3000;
app.listen(US_PORT, () => {
    console.log(`Server is running on port ${US_PORT}`);
});
