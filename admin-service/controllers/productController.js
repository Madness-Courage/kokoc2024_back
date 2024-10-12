const productModel = require('../models/product');

exports.createProduct = async (req, res) => {
    const {name, price, category, collection, image} = req.body;
    try {
        const product = await productModel.createProduct(name, price, category, collection, image);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

exports.updateProduct = async (req, res) => {
    const {id} = req.params;
    const {name, price, category, collection, image} = req.body;
    try {
        const product = await productModel.updateProduct(id, name, price, category, collection, image);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

exports.deleteProduct = async (req, res) => {
    const {id} = req.params;
    try {
        await productModel.deleteProduct(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

exports.getProducts = async (req, res) => {
    try {
        const products = await productModel.getProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};