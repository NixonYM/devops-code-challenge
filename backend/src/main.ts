import express, { NextFunction, Request, Response } from "express";
import cors from "cors";

type Config = {
  port: number;
  host: string;
  httpProtocol: "http" | "https";
};

const config: Config = {
  port: Number(process.env.PORT) || 8080,
  host: process.env.HOST || "localhost",
  httpProtocol: (process.env.HTTP_PROTOCOL as "https" | "http") || "http",
};

const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  console.log("request to", req.url);

  next();
};

const main = () => {
  const app = express();
  app.use(cors({ origin: "*" }));
  app.use(requestLogger);

  app.use("/ping", (_req, res) => {
    res.status(200).json({ message: "all good" });
  });

  app.use("/users", (_req, res) => {
    res.status(200).json({ users: [{ name: "test user" }] });
  });

  app.use("/", (_req, res) => {
    res.status(404).json({ message: "not found" });
  });

  app.listen(config.port, config.host, () => {
    console.log(
      `server listening at ${config.httpProtocol}://${config.host}:${config.port}`
    );
  });
};

main();
