import AsyncHandler from "../middleware/AsyncHandler.js"
import User from "../models/UserModel.js";
import generateToken from "../utils/GenerateToken.js";

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = AsyncHandler(async (req , res) => {
    const {email , password} = req.body;
    const user = await User.findOne({email: email });

    if(user && (await user.matchPassword(password))) {
        generateToken(res , user._id);

        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        })
    } else {
        res.status(401);
        throw new Error("Invalid email or password");
    }
});

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = AsyncHandler(async (req , res) => {
    const {name , email , password} = req.body;
    const userExists = await User.findOne({email})

    if(userExists) {
        res.status(400);
        throw new Error("User already exists");
    };

    const user = await User.create({
        name,
        email,
        password
    })

    if(user) {
        generateToken(res , user._id);
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        })
    } else {
        res.status(400);
        throw new Error("Invalid user data");
    }

    res.send("register user");
});

// @desc    logout user & clear cookie
// @route   POST /api/users/logout
// @access  Private
const logoutUser = AsyncHandler(async (req , res) => {
    res.cookie("jwt" , "" , {
        httpOnly: true,
        expires: new Date(0)
    })
    res.status(200).json({message: "Logged out"})
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