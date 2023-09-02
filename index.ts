import express from "express";
import env from "dotenv";
env.config();
const app = express();

const port: number = parseInt(process.env.PORT!);
const realPort = port;

const Server = app.listen(realPort, () => {
  console.log("");
  console.log("Server is listening on port", realPort);
});

process.on("uncaughtException", (error) => {
  console.log("");
  console.log("Server is shutting down as a result of", error);

  process.exit(1);
});

process.on("unhandledRejection", (reason) => {
  console.log("");
  console.log("Server is shutting down as a result of", reason);

  Server.close(() => {
    process.exit(1);
  });
});
