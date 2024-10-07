const express = require('express');
const newsRoutes = require('./routes/newsRoutes');
const commentRoutes = require('./routes/commentRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require("./swagger.json");
require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/api/news', newsRoutes);
app.use('/api/comments', commentRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});