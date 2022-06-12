import { IDeveloper } from "../models/developer.model";
import { entityDb } from "../db/index";

const createDeveloper = async (developer: IDeveloper) => {
  await entityDb.createDeveloperDb(developer);
};

export { createDeveloper };
