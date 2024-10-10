const express = require('express');
const playersRoutes = require('./routes/playersRoutes');
const coachesRoutes = require('./routes/coachesRoutes');
const staffRoutes = require('./routes/staffRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require("./swagger.json");
require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/api/players', playersRoutes);
app.use('/api/coaches', coachesRoutes);
app.use('/api/staff', staffRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const TM_PORT = process.env.TM_PORT || 3003;

app.listen(TM_PORT, () => {
    console.log(`Server is running on port ${TM_PORT}`);
});