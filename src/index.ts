import express from "express";
import dotenv from "dotenv";

dotenv.config({
  path: process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : `.env`,
});

const app = express();

const port = process.env.PORT || 4000;

app.listen(() => console.log("server listening on port " + port));
