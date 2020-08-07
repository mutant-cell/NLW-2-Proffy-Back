import express from "express";
import ClassesController from "./controller/ClassesController";
import ConnectionsController from "./controller/ConnectionsController";

const routes = express.Router();

routes.post("/classes", ClassesController.store);
routes.get("/classes", ClassesController.index);

routes.post("/connections", ConnectionsController.store);
routes.get("/connections", ConnectionsController.index);

export default routes;
