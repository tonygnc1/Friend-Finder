// Dependencies
// =============================================================
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
const app = express();
app.use(express.static("public"));
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
    app.get("/", function(req, res) {
        // console.log(
            // "gthyju"
        // )
        res.sendFile(path.join(__dirname, "./public/home.html"))
    });
    app.get("/survey", function(req, res) {
        console.log(
            "gthyju"
        )
        res.sendFile(path.join(__dirname, "/survey.html"))
    });
app.listen(PORT, function(){
    console.log(`listening on ${PORT}`)
});