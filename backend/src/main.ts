import express from "express";

type Config = {
  port: number;
};

const config: Config = {
  port: Number(process.env.PORT) || 8080,
};

const main = () => {
  const app = express();

  app.use("/health", (_req, res) => {
    res.status(200).json({ message: "all good" });
  });

  app.use("/users", (_req, res) => {
    res.status(200).json({ users: [{ name: "ben" }] });
  });

  app.use("/", (_req, res) => {
    res.status(404).json({ message: "not found" });
  });

  app.listen(config.port);
};

main();
