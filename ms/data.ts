import { readFile } from "fs";
import path from "path";
import { promisify } from "util";

import { Data } from "./interface";

const readFilePromise = promisify(readFile);

const defaultData: Data = {
  id: "",
  title: "",
  isCompleted: false,
  summary: "",
  sections: {},
  extra: {},
};
const dataFilePath = path.resolve(path.join(process.cwd(), "data.json"));

export const getData: () => Promise<Data> = () =>
  readFilePromise(dataFilePath, "utf8")
    .then((data) => (data ? JSON.parse(data) : defaultData))
    .catch((err) => {
      if ((err.code = "ENOENT")) return defaultData;
    });
