import Router from "express";
import { CreateUser } from "../controllers/create-user";

const route = Router();

route.route("/users").post(new CreateUser().handle.bind(new CreateUser()));

export default route;
