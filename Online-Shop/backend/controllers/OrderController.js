import AsyncHandler from "../middleware/AsyncHandler.js"
import Order from "../models/OrderModel.js";

// @desc    Create new order
// @route   POST /api/orders
// @access  private
const addOrderItems = AsyncHandler(async (req , res) => {
    const {orderItems , shippingAddress , paymentMethod , itemsPrice , taxPrice , shippingPrice , totalPrice} = req.body;
    if(orderItems && orderItems.length === 0){
        res.status(400);
        throw new Error("No order items");
        return;
    }else{
        const order = new Order({
            orderItems: orderItems.map((x) => ({
                ...x , 
                product : x._id ,
                _id : undefined
            })) , user : req.user._id , shippingAddress , paymentMethod , itemsPrice , taxPrice , shippingPrice , totalPrice
        });
        const createdOrder = await order.save();
        res.status(201).json(createdOrder);
    }
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
