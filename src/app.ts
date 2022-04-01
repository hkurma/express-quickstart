import express from "express";
import cors from "cors";
import helmet from "helmet";
import { config } from "./config";
import apiRouter from "./router/api.router";
import { errorHandler } from "./middlewares/error-handler.middleware";

const app = express();

// CORS
app.use(cors());

// Helmet
app.use(helmet());

// API Router
app.use('/api', apiRouter);

// Error Logger
app.use(errorHandler);

// Listen for requests
const port = config.APP_PORT;
app.listen(port, () => {
    console.log(`Application started and listening on port: ${port}`);
})