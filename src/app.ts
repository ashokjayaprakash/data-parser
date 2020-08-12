import express from "express";
import compression from "compression";  // compresses requests
import bodyParser from "body-parser";
import loadV1  from "./parse/v1";
import loadV2  from "./parse/v2";

const router = express.Router();

const app = express();

app.set("port", process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/v1', loadV1(router))
app.use('/v2', loadV2(router))

export default app;