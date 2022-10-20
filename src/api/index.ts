import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";

import { errorsMiddleware } from "./middleware";
import { loggingHelper } from "./helpers";

const app: Application = express();

// Express built-in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS
app.use(cors());

// Logging

// Common logger
app.use(
  morgan("common", { stream: loggingHelper.createLogFileWriteStream("common") })
);

// Errors
app.use(errorsMiddleware.errorHandler);
app.use(errorsMiddleware.notFound);

export default app;
