import express from "express";
import morgan from "morgan";
import tasksRoutes from "./routes/tasks.routes.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(tasksRoutes);

// Middleware para manejar errores
app.use((err, req, res, next) => {
  res.status(500).json({
    status: "error",
    message: err.message,
  });
});

export default app;
