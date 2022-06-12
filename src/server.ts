import express, { Request, Response } from "express";
const bodyParser = require("body-parser");
const serverless = require("serverless-http");

const app = express();
import { router } from "./routes";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", router);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
}); //for local development
//module.exports.handler = serverless(app); //for aws lambda
