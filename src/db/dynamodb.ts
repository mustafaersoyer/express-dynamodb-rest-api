const AWS = require("aws-sdk");
const config = require("../config/config");
const https = require("https");
const agent = new https.Agent({
  keepAlive: true,
}); //this is for use single connection to aws

export const clientDB = () => {
  AWS.config.update({
    ...config.aws_remote_config,
    httpOptions: {
      agent,
    },
  });
  return new AWS.DynamoDB.DocumentClient();
};
