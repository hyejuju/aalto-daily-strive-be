import { Router } from "express";
import { HomeController, appKeyValidator } from "@/components/home";
import { sanitizer } from "@/helpers";
import { UserController } from "@/components/user/controller";

const router = Router();

router.get("/", sanitizer(appKeyValidator), HomeController.getAppInfo);

// Users
router.get("/users", sanitizer(appKeyValidator), UserController.getUsers);
router.post("/users", sanitizer(appKeyValidator), UserController.createUser);

export default router;
