import { healthController } from "../controllers/health.controller";
import { Router } from "./api.router";

export const healthRouter: Router = {
    basePath: '/health',
    routes: [
        {
            path: '/',
            method: 'get',
            handler: healthController.check
        }
    ]
}