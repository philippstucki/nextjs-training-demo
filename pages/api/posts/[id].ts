import type { NextApiRequest, NextApiResponse } from "next";

// available at /api/posts/[id]

export default (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.id;
  res.status(200).json({ id });
};
