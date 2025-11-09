import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors()); // you can restrict to frontend origin later

app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("MongoDB Error:", err));

app.get("/", (req, res) => res.send("Aura Backend Running 🚀"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
