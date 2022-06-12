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
exports.getCompanyLanguages = exports.getLanguageDeveloperCount = void 0;
const index_1 = require("../db/index");
const getLanguageDeveloperCount = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield index_1.entityDb.getLanguageDeveloperCount();
    let languages = [];
    for (let i = 0; i < data.length; i++) {
        languages.push(data[i].languageName);
    }
    const counts = {};
    languages.forEach((x) => {
        counts[x] = (counts[x] || 0) + 1;
    });
    return counts;
});
exports.getLanguageDeveloperCount = getLanguageDeveloperCount;
const getCompanyLanguages = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield index_1.entityDb.getCompanyLanguages();
    const counts = {};
    data.forEach((x) => {
        let company = counts[x["companyName"]] || "";
        if (!company.includes(x["languageName"])) {
            counts[x["companyName"]] =
                (counts[x["companyName"]] ? counts[x["companyName"]] + "," : "") +
                    x["languageName"];
        }
    });
    return counts;
});
exports.getCompanyLanguages = getCompanyLanguages;
