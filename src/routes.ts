import { Router } from "express";
import { UserController } from "./controllers/UserController";
import { SurveysController } from './controllers/SurveysController';
import { SendMailController } from "./controllers/SendMailController";

const router = Router();

const userController = new UserController();
const surveysController = new SurveysController();

const sendMailControllers = new SendMailController();

router.post("/users", userController.create);
router.get("/users", userController.show);

router.post("/surveys", surveysController.create);
router.get("/surveys", surveysController.show);

router.post("/sendMail", sendMailControllers.execute);

export { router };
