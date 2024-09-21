import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import eventsRouter from "./routes/eventsRouter.js";

dotenv.config();

const startServer = () => {
  const app = express();
  const port = Number(process.env.PORT);

  app.use(cors());
  app.use(express.json());

  app.use("/api/events", eventsRouter);

  app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
  });

  app.use((err, req, res, next) => {
    const { status = 500, message = "Server error" } = err;
    res.status(status).json({ message });
  });

  return app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

export default startServer;
