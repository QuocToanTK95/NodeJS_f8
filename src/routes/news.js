import express from "express";
import newController from "../app/controllers/NewsControllers.js";

const router = express.Router();

router.use("/:slug", newController.show);
router.use("/", newController.index);

export default router;
