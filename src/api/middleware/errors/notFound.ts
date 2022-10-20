import { Request, Response } from "express";
import { NotFound } from "./types";

const notFound: NotFound = (_request: Request, response: Response) =>
  response.status(404).json({ success: false, validRoute: false });

export default notFound;
