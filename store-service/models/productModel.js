const {storePool} = require('../config/db');

const getProducts = async () => {
    const query = 'SELECT * FROM products';
    const result = await storePool.query(query);
    return result.rows;
};

module.exports = {getProducts};
