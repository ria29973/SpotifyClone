import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js"


const app = express(); 
dotenv.config();

const PORT = process.env.PORT;
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
    console.log("server is listening on port " + PORT);
});