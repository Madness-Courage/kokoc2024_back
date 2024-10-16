const productModel = require('../models/productModel');

exports.getProducts = async (req, res) => {
    try {
        const products = await productModel.getProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};