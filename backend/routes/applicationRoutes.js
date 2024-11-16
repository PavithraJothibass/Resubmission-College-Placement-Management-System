import express from "express";
import {
  employerGetAllApplications,
  jobseekerDeleteApplication,
  jobseekerGetAllApplications,
  postApplication,
} from "../controllers/applicationController.js";

const router = express.Router();

router.post("/post",  postApplication);
router.get("/employer/getall",  employerGetAllApplications);
router.get("/jobseeker/getall",  jobseekerGetAllApplications);
router.delete("/delete/:id", jobseekerDeleteApplication);

export default router;
