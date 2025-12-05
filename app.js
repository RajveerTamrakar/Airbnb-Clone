const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js"); //requiring listing
const path = require("path"); // joining paths or getting the file name easier and works across different system
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js"); //better way to write try and catch A custom middleware to wrap async functions so you don’t need try/catch everywhere
const ExpressError = require("./utils/expressError.js");
const { listingSchema } = require("./schema.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust"; //callback 

main().then(() => { //calling main function
    console.log(`Connected to DB`)
}).catch((err) => {
    console.log(err);
})

async function main() { //creating main function for db
    await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {  //creating api
   res.redirect("/listings");
});
 
//middleware function
const validateLisitng= (req,res,next) => {
    let {error} = lisitngSchema.validate(req.body);
    console.log(result);
    if (error ) {
        let errMsg = error.details.map((el)=> el.message).join(",")
        throw new ExpressError(400, errMsg);
    }
    else {
        next();
    }
}

//index route
app.get("/listings", wrapAsync(async (req, res) => {
    const allListing = await Listing.find({});
    res.render("listings/index.ejs", { allListing });
}));

//new route to create a new listing
app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs");
})

// Route to show details of a single listing
app.get("/listing/:id", wrapAsync(async (req, res) => {
    const { id } = req.params; // Get the listing ID from the URL
    const listing = await Listing.findById(id); // Find the listing by ID in the DB
    res.render("listings/show.ejs", { listing }); // Render the details of the listing
}));

//create route
// app.post("/listings", async (req, res) => {
//     // // let { title, description, country, image, location, price } = req.body;
//     // let list = req.body.list; //list is a object in new.ejs for getting schemas in short
//     const newListing = new Listing(req.body.list);
//     await newListing.save();
//     res.redirect("/listings");
// })
app.post("/listings", validateLisitng, wrapAsync(async (req, res, next) => {
   
    
    // Destructure the image field with a default fallback
    const newListing = new Listing({
        ...list,
        image: {
            url: list.image?.url || "https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
            filename: list.image?.filename || "default.jpg",
        },
    });
   
    await newListing.save();
    res.redirect("/listings");
})
);

//edit route
app.get("/listings/:id/edit", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const list = await Listing.findById(id);
    res.render("listings/edit.ejs", { list });
}));

//update route
app.put("/listings/:id", validateLisitng, wrapAsync(async (req, res) => {
    if (!req.body.listing) {
        throw new ExpressError(400, "Enter Valid Data");
    }
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.list }, { new: true });
    res.redirect("/listings");
}));

//delete route
app.delete("/listings/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
}));

/*app.get("/testListing", async (req, res) => {
    let sampleListing = new Listing({
        title: "Camp Nou",
        Description: "Calma-Calma",
        price: 700,
        location: "Barcelona",
        Country: " Spain"
    });
    await sampleListing.save();
    console.log(`Sample was saved`);
    res.send("Testing Done");
})*/

app.all("*", (req, res, next) => { //will have sorted error for all apis
    next(new ExpressError(404, "Page Not Found!"));
})

app.use((err, req, res, next) => { //express middleware
    let { statusCode = 500, message = "Something went wrong" } = err;
    res.status(statusCode).render("error.ejs", { message });
    // res.status(statusCode).send(message);
})

app.listen(8080, () => {
    console.log(`listening to port 8080`);
})