import { Router, static as expressStatic } from "express";
import { dir } from "appstage";

export let server = Router();

server.use("/main/-", expressStatic("src/entries/main/public"));

server.get("/", dir({
  path: "src/entries/main",
  name: "index",
}));
