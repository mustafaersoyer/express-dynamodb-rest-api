import { IDeveloper } from "../models/developer.model";
import { clientDB } from "../db/dynamodb";
const config = require("../config/config");
const short = require("short-uuid");
const client = clientDB();
const createDeveloperDb = async (developer: IDeveloper) => {
  let devPK = "dev#" + short.generate();
  var developerParams = {
    TableName: config.aws_table_name,
    Item: {
      PK: devPK,
      SK: "meta",
      firstName: developer.firstName,
      lastName: developer.lastName,
    },
  };
  var data = await client.put(developerParams).promise();

  let companyPK = "comp#" + short.generate();
  let companyParams = {
    TableName: config.aws_table_name,
    Item: {
      PK: companyPK,
      SK: "meta",
      companyName: developer.company,
    },
  };
  var data = await client.put(companyParams).promise();

  for (let i = 0; i < developer.languages.length; i++) {
    let langPK = "lang#" + short.generate();
    let languageParams = {
      TableName: config.aws_table_name,
      Item: {
        PK: langPK,
        SK: "meta",
        languageName: developer.languages[i],
      },
    };
    var data = await client.put(languageParams).promise();

    let languageDevRelationship = {
      //it is a record for language and developer relationship, there is a index on this table that name is GSI1-SK-index
      TableName: config.aws_table_name,
      Item: {
        PK: langPK,
        SK: devPK,
        GSI1: "lang#dev",
        languageName: developer.languages[i],
      },
    };
    var data = await client.put(languageDevRelationship).promise();

    let languageCompanyRelationship = {
      //it is a record for language and company relationship, there is a index on this table that name is GSI1-SK-index
      TableName: config.aws_table_name,
      Item: {
        PK: langPK,
        SK: companyPK,
        GSI1: "lang#comp",
        languageName: developer.languages[i],
        companyName: developer.company,
      },
    };
    var data = await client.put(languageCompanyRelationship).promise();
  }
};

const getLanguageDeveloperCount = async () => {
 
    var params = {
      TableName: config.aws_table_name,
      ScanIndexForward: true,
      IndexName: "GSI1-SK-index",
      KeyConditionExpression: "#GSI1 = :GSI1",
      ExpressionAttributeValues: {
        ":GSI1": "lang#dev",
      },
      ExpressionAttributeNames: {
        "#GSI1": "GSI1",
      },
    };

    var data = await client.query(params).promise();
    return data.Items;
  
};

const getCompanyLanguages = async () => {
  
    var params = {
      TableName: config.aws_table_name,
      ScanIndexForward: true,
      IndexName: "GSI1-SK-index",
      KeyConditionExpression: "#GSI1 = :GSI1",
      ProjectionExpression: "languageName, companyName",
      ExpressionAttributeValues: {
        ":GSI1": "lang#comp",
      },
      ExpressionAttributeNames: {
        "#GSI1": "GSI1",
      },
    };

    var data = await client.query(params).promise();
    return data.Items;
  
};

export { createDeveloperDb, getLanguageDeveloperCount, getCompanyLanguages };
