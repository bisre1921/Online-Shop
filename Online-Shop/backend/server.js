import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import connectDB from "./config/db.js";
import ProductRoutes from "./routes/ProductRoutes.js";
import Product from "./models/ProductModel.js";
import { errorHandler, notFound } from "./middleware/ErrorMiddleware.js";

const port = process.env.PORT || 5000;

connectDB();
const app = express();

app.use(cors());

app.get("/" , (req , res) => {
    res.send("Server is ready");
});

app.use("/api/products" , ProductRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port , () => {
    console.log(`Server is running at http://localhost:${port}`);
});
