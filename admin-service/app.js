const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/adminRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const jwt = require("jsonwebtoken");
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use('/api/admin', adminRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const NS_PORT = process.env.PORT || 3001;
app.listen(NS_PORT, () => {
    console.log(`Server is running on port ${NS_PORT}`);
});