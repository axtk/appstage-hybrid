import { Router } from "express";
import { render } from "./render.tsx";

export let server = Router();

const urls = [
  "/react-demo",
  "/react-demo/about",
  "/react-demo/sections/:id",
];

server.get(urls, render());
