import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb+srv://mohamedfathi68:POFk6zOhciyHUz5d@cluster0.uhqg8fv.mongodb.net/");


client
  .connect()
  .then(console.log("database connected successfully"))
  .catch(console.error);

const db = client.db('CarRentalSystem');
const car = db.collection("car");
const rental = db.collection("rental")

const user = db.collection("user");

export { car, rental, user };
