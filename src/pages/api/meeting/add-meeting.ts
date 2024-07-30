import { MongoClient } from "mongodb";
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    // Not signed in
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
  const client = await MongoClient.connect(process.env.MONGO_DB!);
  const db = client.db();
  const usersCollection = db.collection("users");
  const user = await usersCollection.findOne({ email: session.user!.email });

  if (!user || !user.role.includes("admin")) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  try {
    const formData = req.body;
    const meetingsCollection = db.collection("meetings");

    await meetingsCollection.insertOne(formData);

    client.close();
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    return;
  }

  res.status(201).json({ message: "Marker added" });
}