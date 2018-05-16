const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const router = express.Router();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static('public'));
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//require("./server/routes/carRoutes.js")(app);
//require("./server/routes/authRoutes.js")(app);

const db = process.env.MONGODB_URI || "mongodb://localhost/eatIndb";
mongoose.connect(db, function(err) {
    if (err) throw error;
    console.log("DB connection successful")
});

app.listen(PORT, function() {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
});