import { Router } from "express";
import create from "../controllers/newBlog.controller.js";
import read from "../controllers/allBlogs.controller.js";
const router = Router();

router.post("/create", create);
router.get("/blogs", read);

export default router;
