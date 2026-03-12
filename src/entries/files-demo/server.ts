import { Router, static as expressStatic } from "express";
import { dir } from "appstage";

export let server = Router();

server.use("/files-demo/-", expressStatic("src/entries/files-demo/public"));

server.get("/files-demo{/:name}", dir({
  path: "src/entries/files-demo/content",
  name: (req) => String(req.params.name ?? "") || "intro",
}));
