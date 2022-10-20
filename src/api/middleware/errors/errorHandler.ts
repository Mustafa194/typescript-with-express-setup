import { Request, Response, NextFunction } from "express";

import config from "../../../config";
import { ErrorHandler } from "./types";

const errorHandler: ErrorHandler = (
  error: Error,
  _request: Request,
  response: Response,
  _next: NextFunction
) => {
  const statusCode: number = response.statusCode || 500;

  response.status(statusCode).json({
    success: false,
    error: {
      name: error.name,
      message: error.message,
      stack: config.apiEnv === "development" ? error.stack : undefined,
    },
  });
};

export default errorHandler;
