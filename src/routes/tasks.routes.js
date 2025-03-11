import { Router } from "express";

const router = Router();

router.get("/tasks", (req, res) => {
  res.json({ message: "Hello World" });
});

export default router;
