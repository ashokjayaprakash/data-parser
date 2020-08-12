import { ParseController } from "./ParseController";
import { parse, validateFunction } from "../../validator/ParseValidator";
import express from "express"

export class ParseRouter {

    private router: express.Router;
    private parseController: ParseController;

    constructor(router: express.Router, parseController: ParseController) {
        this.router = router
        this.parseController = parseController
    }

    initializeRoute() {
        this.router.post("/", parse(), validateFunction, this.parseController.parse);
        return this.router
    }
}