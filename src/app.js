import express from "express";
import cors from "cors";
import morgan from "morgan";
import productRoute from "../router/product";
import userRoute from "../router/auth";
import categoryRoute from "../router/category"
const app = express();
import mongoose from "mongoose";


app.use(express.json());

// middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

app.use("/api",productRoute,userRoute,categoryRoute);
mongoose.connect('mongodb://localhost:27017/Asm_Nextjs')
.then(() => console.log("Kết nối DB thành công"))
.catch((error) => console.log(error));


const PORT = 2606;
app.listen(PORT, () => {
    console.log("Server is running port",PORT);
});