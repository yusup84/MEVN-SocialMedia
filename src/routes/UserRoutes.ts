import { getUser } from "../controllers/UserController";
import { Router } from "express";

const routes = Router()

routes.get('/', getUser)

export default routes
