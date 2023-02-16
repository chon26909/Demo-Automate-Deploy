import express from "express";
import dotenv from "dotenv";

dotenv.config({
  path: process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : `.env`,
});

const app = express();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => res.send("Hello from " + process.env.MESSEGE_HELLO));

app.listen(PORT, () => console.log("server listening on port " + PORT));
