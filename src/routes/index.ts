import express = require("express");

import { developer } from "../controllers";
import { language } from "../controllers";

const router = express.Router();

router.post("/developer", developer.createDeveloper);
router.get("/language/dev-counts", language.getLanguageDeveloperCount);
router.get("/language/company", language.getCompanyLanguages);

export { router };
