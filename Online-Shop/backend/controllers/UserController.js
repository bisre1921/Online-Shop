import AsyncHandler from "../middleware/AsyncHandler.js"
import User from "../models/UserModel.js";

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = AsyncHandler(async (req , res) => {
   res.send("auth user");
});

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = AsyncHandler(async (req , res) => {
    res.send("register user");
});

// @desc    logout user & clear cookie
// @route   POST /api/users/logout
// @access  Private
const logoutUser = AsyncHandler(async (req , res) => {
    res.send("logout user");
});

// @desc    get user profile & get token
// @route   GET /api/users/profile
// @access  private
const getUserProfile = AsyncHandler(async (req , res) => {
    res.send("get user profile");
});

// @desc    update user profile & get token
// @route   PUT /api/users/profile
// @access  private
const updateUserProfile = AsyncHandler(async (req , res) => {
    res.send("update user profile");
});


// @desc    Get users
// @route   GET /api/users
// @access  private/admin
const getUsers = AsyncHandler(async (req , res) => {
    res.send("get users");
});

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  private/admin
const getUserByID = AsyncHandler(async (req , res) => {
    res.send("get user by id");
});

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  private/admin
const deleteUser = AsyncHandler(async (req , res) => {
    res.send("delete user");
});

// @desc    update user
// @route   PUT /api/users/:id
// @access  private/admin
const updateUser = AsyncHandler(async (req , res) => {
    res.send("update user");
});


export {authUser , registerUser , logoutUser , getUserProfile , updateUserProfile , getUsers , getUserByID , deleteUser , updateUser}