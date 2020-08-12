import express from "express";
import { ParseController } from "./ParseController";
import { ParseService } from "./ParseService";
import { ParseRouter } from "./ParseRouter";

const moduleLoader = (router: express.Router): express.Router => {
  const parseService = new ParseService();
  const parseController = new ParseController(parseService);
  const parseRouter = new ParseRouter(router, parseController);
  return parseRouter.initializeRoute();
};

export default moduleLoader;
