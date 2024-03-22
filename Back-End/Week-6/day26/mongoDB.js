//! Connect to MongoDB:
const { MongoClient } = require("mongodb");
// MongoDB connection URL
const url = "mongodb://localhost:27017";
// Create a new MongoClient
const client = new MongoClient(url);

// Async function to run the MongoDB operations
async function run() {
  try {
    // Connect to MongoDB
    client
      .connect()
      .then(() => console.log(" Connect to Database"))
      .catch((Error) => console.log(" Error connecting  ", Error));

    // Get a reference to the database and collection:
    const db = client.db("mydb");
    const users = db.collection("users");

    //* Insert multiple documents into the "users" collection
    const doc = [
      {
        name: "Mons",
        age: 27,
        location: "MOR",
      },
      {
        name: "Arkadian",
        age: 30,
        location: "BRZ",
      },
      {
        name: "Killua",
        age: 17,
        location: "JAP",
      },
    ];
    const insertUser = await users
      .insertMany(doc)
      .then((result) => console.log("User inserted: ", result.insertedCount))
      .catch((err) => console.log(err));

    //* Fetching the "users" collections for a single document with the name "Mons".
    const fetchUser = await users.findOne({ name: "Mons" });
    console.log("Fetched user: ", fetchUser);
  } catch (error) {
    console.log("🚀 ~ run ~ error:", error);
  } finally {
    // Close the MongoDB connection
    client.close();
    console.log("Connection closed");
  }
}
// Run the MongoDB operations
run().catch(console.dir);
