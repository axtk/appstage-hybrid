import { Router } from "express";
import { root } from "../const/root.ts";
import { render } from "./render.tsx";

export let server = Router();

const urls = [root, `${root}/about`, `${root}/sections/:id`];

server.get(urls, render());
