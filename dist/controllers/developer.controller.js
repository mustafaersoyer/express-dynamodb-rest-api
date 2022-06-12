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
exports.createDeveloper = void 0;
const services_1 = require("../services");
const createDeveloper = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield services_1.developerService.createDeveloper(req.body); // req.body is the developer object, it should validated before this call but i don't have enough time
        res.status(201).json({ success: true });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});
exports.createDeveloper = createDeveloper;
