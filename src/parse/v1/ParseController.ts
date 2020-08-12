import { Response, Request } from "express";
import { ParseRequestPayload } from "../../data/Types";
import { ParseService } from "./ParseService";
import { logger } from "../../utilities/logger";

export class ParseController {

    private parseService: ParseService
    
    constructor(parseService: ParseService) {
        this.parseService = parseService
    }

    parse(req: Request, res: Response) {
        try {
            logger.debug("parse:start", req.body)
            const parseRequestPayload: ParseRequestPayload = req.body
            const clientInfo = this.parseService.parseClientInfo(parseRequestPayload.data)
            logger.debug("parse:end", clientInfo)
            res.send({
                statusCode: 200,
                data: clientInfo
            })
        } catch (error) {
            logger.error("parse:error", error)
            res.send({
                statusCode: 500,
                message: "Internal Server Error"
            })
        }
        
    }

}

