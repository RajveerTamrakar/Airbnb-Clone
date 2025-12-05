const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    location: String,
    country: String,
    price: Number,
    // image: { //object type because in db image is not a string it is an object containing url and filename
    //     type: Object,
    //     default: "https://unsplash.com/photos/a-truck-driving-down-a-dirt-road-in-the-mountains-TpzngfXk87g",
    //     set: (v) => v === "" ? "https://unsplash.com/photos/a-truck-driving-down-a-dirt-road-in-the-mountains-TpzngfXk87g" : v //function used if image has no value then use default link otherwise given value , called ternary operator
    // }
    image: { 
        url: { 
            type: String, 
            default: "https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" 
        },
        filename: { 
            type: String, 
            default: "default.jpg" 
        }
    }

})

const Listing = mongoose.model("Listing", listingSchema); //creates a model named lisitng in mongoose
module.exports = Listing; //This makes the Listing model available for use in other files