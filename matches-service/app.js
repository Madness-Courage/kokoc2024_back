const express = require('express');
const matchesRoutes = require('./routes/matchesRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require("./swagger.json");
require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/api/matches', matchesRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const MS_PORT = process.env.MS_PORT || 3004;

app.listen(MS_PORT, () => {
    console.log(`Server is running on port ${MS_PORT}`);
});