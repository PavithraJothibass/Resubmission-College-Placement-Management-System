import express from "express";
import {
  deleteJob,
  getAllJobs,
  getMyJobs,
  getSingleJob,
  postJob,
  updateJob,
} from "../controllers/jobController.js";

const router = express.Router();

router.get("/getall", getAllJobs);
router.post("/post", postJob);
router.get("/getmyjobs",  getMyJobs);
router.put("/update/:id",  updateJob);
router.delete("/delete/:id",  deleteJob);
router.get("/:id",  getSingleJob);

export default router;
