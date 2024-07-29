import { MongoClient } from "mongodb";
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

export default async function handler(req: any, res: any) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    // Not signed in
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  if (req.method === "GET") {
    try {
      const client = await MongoClient.connect(process.env.MONGO_DB!);
      const db = client.db();
      const meetingsCollection = db.collection("meetings");
      const meetings = await meetingsCollection.find().toArray();

      setTimeout(() => {
        client.close();
      }, 1500);

      res.status(200).json({ meetings });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
      return;
    }
  }
}
