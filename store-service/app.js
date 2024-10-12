const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();

app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api', productRoutes);
app.use('/api', orderRoutes);

const SR_PORT = process.env.SR_PORT || 3005;
app.listen(SR_PORT, () => {
    console.log(`Server is running on port ${SR_PORT}`);
});
