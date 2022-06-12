import { entityDb } from "../db/index";

const getLanguageDeveloperCount = async () => {
  const data = await entityDb.getLanguageDeveloperCount();

  let languages = [];
  for (let i = 0; i < data.length; i++) {
    languages.push(data[i].languageName);
  }

  const counts: any = {};
  languages.forEach((item: string) => {
    counts[item] = (counts[item] || 0) + 1;
  });
  return counts;
};

const getCompanyLanguages = async () => {
  const data = await entityDb.getCompanyLanguages();
  const counts: any = {};
  data.forEach((item: any) => {
    let company: string = counts[item["languageName"]] || "";
    if (!company.includes(item["companyName"])) {
      counts[item["languageName"]] =
        (counts[item["languageName"]]
          ? counts[item["languageName"]] + ","
          : "") + item["companyName"];
    }
  });
  return counts;
};

export { getLanguageDeveloperCount, getCompanyLanguages };
