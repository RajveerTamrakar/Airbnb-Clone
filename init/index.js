//whole process of initializations
//This index.js file is used to connect to MongoDB and fill the database with initial (dummy) data.
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust"; //callback 

//Calling the main() function
main().then(() => { //calling main function
    console.log(`Connected to DB`)
}).catch((err) => {
    console.log(err);
})

async function main() { //creating main function for db
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({}); //deleting already putted data
    await Listing.insertMany(initData.data);
    console.log(`Data was initialized`);
}

initDB();