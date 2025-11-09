import express from "express";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// ✅ Protected routes
router.route("/")
  .get(protect, getTasks)
  .post(protect, createTask);

router.route("/:id")
  .patch(protect, updateTask)
  .delete(protect, deleteTask);

export default router;
