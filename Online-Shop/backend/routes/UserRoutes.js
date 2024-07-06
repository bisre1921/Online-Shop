import express from "express";
import {authUser , registerUser , logoutUser , getUserProfile , updateUserProfile , getUsers , getUserByID , deleteUser , updateUser} from "../controllers/UserController.js";
import {protect , admin} from "../middleware/AuthMiddleware.js";

const router = express.Router();

router.route("/").post(registerUser).get(protect , admin , getUsers);
router.post("/logout" , logoutUser);
router.post("/auth" , authUser);
router.route("/profile").get(protect , getUserProfile).put(protect , updateUserProfile);
router.route("/:id").get(protect , admin , getUserByID).delete(protect , admin , deleteUser).put(protect , admin , updateUser);

export default router;  
