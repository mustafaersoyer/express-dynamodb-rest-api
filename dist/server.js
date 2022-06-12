"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bodyParser = require("body-parser");
const serverless = require("serverless-http");
const app = (0, express_1.default)();
const routes_1 = require("./routes");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", routes_1.router);
app.listen(3000, () => {
    console.log("Server is running on port 3000");
}); //for local development
//module.exports.handler = serverless(app); //for aws lambda
