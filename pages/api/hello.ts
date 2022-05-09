import type { NextApiRequest, NextApiResponse } from "next";

// available at /api/hello

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ name: "Hello" });
};
