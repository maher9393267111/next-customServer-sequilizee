import { SelectAllWorks } from "../../../server/controllers/works";

export default async function handler(req, res) {
  const data = await SelectAllWorks();

  res.status(200).json({ result: true, data });
}
