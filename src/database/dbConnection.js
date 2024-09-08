import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017");

client
  .connect()
  .then(console.log("database connected successfully"))
  .catch(console.error);

const db = client.db('CarRentalSystem');
const car = db.collection("car");
const rental = db.collection("rental").aggregate([
  {
    $lookup: {
      from: "user",
      localField: "userId",
      foreignField: "_id",
      as: "userData"
    }
  }
]);

const user = db.collection("user");

export { car, rental, user };
