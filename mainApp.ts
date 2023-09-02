import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import { STATUS, errorFile } from "./error/errorFile";
import { errorHandler, handleError } from "./error/errorHandler";
export const mainApp = (app: Application) => {
  app.use(express.json());
  app.use(
    cors({
      origin: "*",
      methods: ["GET", "POST", "PATCH", "DELETE"],
    })
  );
  app.all(
    "*",
    (error: errorFile, req: Request, res: Response, next: NextFunction) => {
      next(
        new errorFile({
          errorName: `Route misplacement error ${req.originalUrl}`,
          errorMessage: `This error is as a result of ${req.originalUrl}`,
          errorStatus: STATUS.BAD,
          errorSuccess: false,
        })
      );
    }
  );
  app.use(handleError)
};
