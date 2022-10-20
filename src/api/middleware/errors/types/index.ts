import { Request, Response, NextFunction } from "express";

export type NotFound = (_request: Request, response: Response) => Response;

export type ErrorHandler = (
  error: Error,
  _request: Request,
  response: Response,
  next: NextFunction
) => void;
