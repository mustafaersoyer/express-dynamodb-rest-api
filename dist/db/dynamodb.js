"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientDB = void 0;
const AWS = require("aws-sdk");
const config = require("../config/config");
const https = require("https");
const agent = new https.Agent({
    keepAlive: true,
}); //this is for use single connection to aws
const clientDB = () => {
    AWS.config.update(Object.assign(Object.assign({}, config.aws_remote_config), { httpOptions: {
            agent,
        } }));
    return new AWS.DynamoDB.DocumentClient();
};
exports.clientDB = clientDB;
