const {storePool} = require('../config/db');

const createProduct = async (name, price, category, collection, image) => {
    const query = 'INSERT INTO products (name, price, category, collection, image) VALUES ($1, $2, $3, $4, $5) RETURNING *';
    const values = [name, price, category, collection, image];
    const result = await storePool.query(query, values);
    return result.rows[0];
};

const updateProduct = async (id, name, price, category, collection, image) => {
    const query = 'UPDATE products SET name = coalesce($1, name), price = coalesce($2, price), category = coalesce($3, category), collection = coalesce($4, collection), image = coalesce($5, image) WHERE id = $6 RETURNING *';
    const values = [name, price, category, collection, image, id];
    const result = await storePool.query(query, values);
    return result.rows[0];
};

const deleteProduct = async (id) => {
    const query = 'DELETE FROM products WHERE id = $1';
    const values = [id];
    await storePool.query(query, values);
};

const getProducts = async () => {
    const query = 'SELECT * FROM products';
    const result = await storePool.query(query);
    return result.rows;
};

module.exports = {
    createProduct,
    updateProduct,
    deleteProduct,
    getProducts,
};
