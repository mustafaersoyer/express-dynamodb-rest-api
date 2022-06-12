import { Request, Response } from "express";

import { developerService } from "../services";

const createDeveloper = async (req: Request, res: Response) => {
  try {
    await developerService.createDeveloper(req.body); // req.body is the developer object, it should validated before this call but i don't have enough time
    res.status(201).json({ success: true });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export { createDeveloper };
