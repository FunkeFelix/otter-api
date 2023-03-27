import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri as string);

export async function connect() {
  try {
    await client.connect();
    console.log("Connected correctly to server");
  } finally {
    await client.close();
  }
}
