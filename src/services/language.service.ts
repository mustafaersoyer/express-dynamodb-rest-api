import { entityDb } from "../db/index";

const getLanguageDeveloperCount = async () => {
  const data = await entityDb.getLanguageDeveloperCount();

  let languages = [];
  for (let i = 0; i < data.length; i++) {
    languages.push(data[i].languageName);
  }

  const counts: any = {};
  languages.forEach((x: string) => {
    counts[x] = (counts[x] || 0) + 1;
  });
  return counts;
};

const getCompanyLanguages = async () => {
  const data = await entityDb.getCompanyLanguages();
  const counts: any = {};
  data.forEach((x: any) => {
    let company: string = counts[x["languageName"]] || "";
    if (!company.includes(x["companyName"])) {
      counts[x["languageName"]] =
        (counts[x["languageName"]] ? counts[x["languageName"]] + "," : "") +
        x["companyName"];
    }
  });
  return counts;
};

export { getLanguageDeveloperCount, getCompanyLanguages };
