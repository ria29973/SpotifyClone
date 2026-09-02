import {Router} from "express";

const router = Router();
router.get("/", (req, res) => {
    console.log("GET /api/users hit");
    res.send("user route");
});
export default router; 