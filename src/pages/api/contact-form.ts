import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

// api/hello
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const data = req.body;
      const client = await MongoClient.connect(process.env.MONGO_DB!);
      const db = client.db();
      const markersCollection = db.collection("contact-form");

      markersCollection.insertOne(data);

      setTimeout(() => {
        client.close();
      }, 1500);
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
    }
  }

  res.status(200).json({ message: "Your feedback would be sent" });
}
