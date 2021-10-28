import type { NextApiRequest, NextApiResponse } from "next";

import { getData } from "../../../ms/data";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await getData();
    res.status(200).send(data);
  } catch (err: any) {
    res.status(500).send(err.message);
  }
};
