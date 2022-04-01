import dotenv from "dotenv";

// Load configuration from .env
dotenv.config();

export const config = {
    APP_PORT: process.env.APP_PORT || 3000
}