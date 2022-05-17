import type { NextApiRequest, NextApiResponse } from "next";

// available at /api/hello

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ name: "Hello" });
};

export default handler;
