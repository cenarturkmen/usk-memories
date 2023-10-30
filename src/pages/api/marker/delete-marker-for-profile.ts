import { MongoClient, ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { set } from "react-hook-form";

// create delete api for marker for profile with using _id
// _id coming from with params

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body, query } = req;
  const { _id } = query;

  const client = await MongoClient.connect(process.env.MONGODB_URL!);

  const db = client.db();
  const markerCollection = db.collection("marker");

  if (method === "DELETE") {
    const result = await markerCollection.deleteOne({ _id: new ObjectId(_id?.toString()) });
    client.close();
    res.status(200).json({ message: "Marker deleted successfully" });
  }
}