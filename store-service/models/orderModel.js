const {storePool} = require('../config/db');

const createOrder = async (userId, productId, productName, quantity, totalAmount) => {
    const query = 'INSERT INTO orders (user_id, product_id, product_name, quantity, total_amount) VALUES ($1, $2, $3, $4, $5) RETURNING *';
    const values = [userId, productId, productName, quantity, totalAmount];
    const result = await storePool.query(query, values);
    return result.rows[0];
};

const getOrdersByUser = async (userId) => {
    const query = 'SELECT * FROM orders WHERE user_id = $1';
    const values = [userId];
    const result = await storePool.query(query, values);
    return result.rows;
};

module.exports = {
    createOrder,
    getOrdersByUser,
};
