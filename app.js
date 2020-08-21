const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const morgan = require("morgan");

//mongoDB connection

mongoose.connect('mongodb://127.0.0.1/BrandO',{ useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log("Mongodb Database connected");
}).catch((error) => {
    console.log(error)
});

//Server app connection

const app = express();

//morgan middleware
 
app.use(morgan("dev"));

//bodyParser

app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//Authentication passport module initialization middleware

app.use(passport.initialize());
//config file for passport stratagy for jwt token
require("./config/passport")(passport);

//Routing Links
const users = require("./routes/users.js");
const accounts = require("./routes/accounts.js");
const company = require("./routes/companies.js");
const tieupcompany = require("./routes/tieupCompanies.js");

app.use("/", users);
app.use("/my-account", accounts);
app.use("/company", company);
app.use("/tieup-company", tieupcompany);

//listening Port
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`nodejs started at port ${port}`);
});