import express from "express";
import dotenv from "dotenv";

dotenv.config({
  path: process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : `.env`,
});

const app = express();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => res.send("Hello World"));
app.get("/env", (req, res) => res.json({ env: process.env }));

app.listen(() => console.log("server listening on port " + PORT));
