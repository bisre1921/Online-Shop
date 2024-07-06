import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();
import cors from "cors";
import connectDB from "./config/db.js";
import ProductRoutes from "./routes/ProductRoutes.js";
import UserRoutes from "./routes/UserRoutes.js";
import Product from "./models/ProductModel.js";
import { errorHandler, notFound } from "./middleware/ErrorMiddleware.js";

const port = process.env.PORT || 5000;

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cookieParser());

app.use(cors());

app.get("/" , (req , res) => {
    res.send("Server is ready");
});

app.use("/api/products" , ProductRoutes);
app.use("/api/users" , UserRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port , () => {
    console.log(`Server is running at http://localhost:${port}`);
});
