import { Request, Response } from "express";

import { languageService } from "../services";

const getLanguageDeveloperCount = async (req: Request, res: Response) => {
  try {
    const data = await languageService.getLanguageDeveloperCount();
    res.status(200).send(data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const getCompanyLanguages = async (req: Request, res: Response) => {
  try {
    const data = await languageService.getCompanyLanguages();
    res.status(200).send(data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export { getLanguageDeveloperCount, getCompanyLanguages };
