import type { NextApiRequest, NextApiResponse } from "next";

// available at /api/posts/[id]

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.id;
  res.status(200).json({ id });
};

export default handler;
