import express, { NextFunction, Request, Response } from "express";
import { healthRouter } from "./health.router";

// Add individual routers to this array 
const routers = [
    healthRouter
];

const apiRouter = express.Router();
routers.forEach(router => {
    let expressRouter = express.Router();
    router.routes.map(route => {
        expressRouter[route.method](route.path, (req: Request, res: Response, next: NextFunction) => {
            route.handler(req).then(data => {
                res.json(data);
            }).catch(err => {
                next(err);
            });
        });
    });
    apiRouter.use(router.basePath, expressRouter);
})
export default apiRouter;

export type Router = {
    basePath: string,
    routes: Route[];
}

export type Route = {
    path: string,
    method: 'get' | 'post' | 'put' | 'delete',
    handler: (req: Request) => Promise<any>;
}
