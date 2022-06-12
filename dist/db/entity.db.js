"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCompanyLanguages = exports.getLanguageDeveloperCount = exports.createDeveloperDb = void 0;
const dynamodb_1 = require("../db/dynamodb");
const config = require("../config/config");
const short = require("short-uuid");
const client = (0, dynamodb_1.clientDB)();
const createDeveloperDb = (developer) => __awaiter(void 0, void 0, void 0, function* () {
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
    var data = yield client.put(developerParams).promise();
    let companyPK = "comp#" + short.generate();
    let companyParams = {
        TableName: config.aws_table_name,
        Item: {
            PK: companyPK,
            SK: "meta",
            companyName: developer.company,
        },
    };
    var data = yield client.put(companyParams).promise();
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
        var data = yield client.put(languageParams).promise();
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
        var data = yield client.put(languageDevRelationship).promise();
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
        var data = yield client.put(languageCompanyRelationship).promise();
    }
});
exports.createDeveloperDb = createDeveloperDb;
const getLanguageDeveloperCount = () => __awaiter(void 0, void 0, void 0, function* () {
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
    var data = yield client.query(params).promise();
    return data.Items;
});
exports.getLanguageDeveloperCount = getLanguageDeveloperCount;
const getCompanyLanguages = () => __awaiter(void 0, void 0, void 0, function* () {
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
    var data = yield client.query(params).promise();
    return data.Items;
});
exports.getCompanyLanguages = getCompanyLanguages;
