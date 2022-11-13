import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://almrdog:Coltrane67@cluster0.uglli.mongodb.net/?retryWrites=true&w=majority"
  );

  return client;
}
