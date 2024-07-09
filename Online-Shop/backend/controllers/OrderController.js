import AsyncHandler from "../middleware/AsyncHandler.js"
import Order from "../models/OrderModel.js";

// @desc    Create new order
// @route   POST /api/orders
// @access  private
const addOrderItems = AsyncHandler(async (req , res) => {
    res.send("add order items")
});

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  private
const getMyOrders = AsyncHandler(async (req , res) => {
    res.send("get my orders")
});

// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  private
const getOrderById = AsyncHandler(async (req , res) => {
    res.send("add order by id")
});

// @desc    update order to paid
// @route   GET /api/orders/:id/pay
// @access  private
const updateOrderToPaid = AsyncHandler(async (req , res) => {
    res.send("update order to paid")
});

// @desc    update order to delivered
// @route   GET /api/orders/:id/deliver
// @access  private
const updateOrderToDelivered = AsyncHandler(async (req , res) => {
    res.send("update order to delivered")
});

// @desc    Get all orders
// @route   GET /api/orders
// @access  private/admin
const getOrders = AsyncHandler(async (req , res) => {
    res.send("get all orders")
});

export {addOrderItems , getMyOrders , getOrderById , updateOrderToPaid , updateOrderToDelivered , getOrders};
