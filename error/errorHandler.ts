import { Application, Response } from "express";
import { STATUS, errorFile } from "./errorFile";

export const handleError = (
  error: errorFile,
  res: Response
) => {
  return res.status(STATUS.BAD).json({
    errorName: error.errorName,
    errorMessage: error.errorMessage,
    errorStatus: error.errorStatus,
    errorSuccess: error.errorSuccess,
    errorStack: error.stack,
    error,
  });
};

export const errorHandler = (error: errorFile, res: Response) => {
  handleError(error, res);
};
