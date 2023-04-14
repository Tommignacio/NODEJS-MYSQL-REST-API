import { Router } from "express";
import { ping } from "../controllers/index.controller.js";

const router = Router();

//consulta mysql
router.get("/ping", ping);

export default router;
