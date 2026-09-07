import express from "express";
import dotenv from "dotenv";
import fileUpload from "express-fileupload"; 
import cors from "cors";
import path from "path"; 
import { clerkMiddleware } from '@clerk/express'
import {connectDB} from "./lib/db.js";
import userRoutes from "./routes/user.route.js";
import adminRoutes from "./routes/admin.route.js";
import authRoutes from "./routes/auth.route.js";
import songRoutes from "./routes/song.route.js";
import statsRoutes from "./routes/stats.route.js";
import albumRoutes from "./routes/album.route.js";



const app = express(); 
const __dirname = path.resolve();
dotenv.config();

app.use(express.json()); //to parse the json data
app.use(clerkMiddleware()); //add auth to request object
app.use(fileUpload({
    useTempFiles: true, 
    tempFileDir: path.join(__dirname, "tmp"),
    createParentPath: true, 
    limits: {
        fileSize: 10 * 1024 * 1024, //10 mb file size
    },

})); 

const PORT = process.env.PORT;
app.use(cors(
    {
        origin: "http://localhost:5173", 
        credentials: true,
    }
)); 
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/song", songRoutes);
app.use("/api/album", albumRoutes);
app.use("/api/stats", statsRoutes);

//error handler
app.use((err, req, res, next) => {
    res.status(500).json({message: process.env.NODE_ENV === "production" ? "Internal server error": err});
}); 

app.listen(PORT, () => {
    console.log("server is listening on port " + PORT);
    connectDB();
});