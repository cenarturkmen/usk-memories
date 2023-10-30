import { MongoClient, ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const data = req.body;
      const client = await MongoClient.connect(process.env.MONGO_DB!);
      const db = client.db();
      const markersCollection = db.collection("markers");

      markersCollection.deleteOne({ _id: new ObjectId(data._id) });

      setTimeout(() => {
        client.close();
      }, 1500);
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
    }

    res.status(201).json({ message: "Marker deleted" });
  }
}
