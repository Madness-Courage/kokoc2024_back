const orderModel = require('../models/orderModel');

exports.createOrder = async (req, res) => {
    const {productId, productName, quantity, totalAmount} = req.body;
    const userId = req.user.id;
    try {
        const order = await orderModel.createOrder(userId, productId, productName, quantity, totalAmount);
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

exports.getOrdersByUser = async (req, res) => {
    const userId = req.user.id;
    try {
        const orders = await orderModel.getOrdersByUser(userId);
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};
