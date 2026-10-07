import { clerkClient, getAuth } from "@clerk/express";
import dotenv from "dotenv";

dotenv.config();

export const protectRoute = async (req, res, next) => {
    const { userId } = getAuth(req);
    if (!userId) {
        return res.status(401).json({ message: "Unauthorized - you must be logged in" });
    }
    next();
};

export const requireAdmin = async (req, res, next) => {
    try {
        const { userId } = getAuth(req);
        const currentUser = await clerkClient.users.getUser(userId);
        const isAdmin = process.env.ADMIN_EMAIL === currentUser.primaryEmailAddress?.emailAddress;
        if (!isAdmin) {
            return res.status(403).json({ message: "Unauthorized - you must be an admin" });
        }
        next();
    } catch (error) {
        next(error);
    }
};