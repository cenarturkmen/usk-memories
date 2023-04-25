import { MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const client = await MongoClient.connect(process.env.MONGO_DB!);
      const db = client.db();
      const markersCollection = db.collection("markers");
      const markers = await markersCollection.find().toArray();

      setTimeout(() => {
        client.close();
      }, 1500);

      res.status(200).json({ markers });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
}
