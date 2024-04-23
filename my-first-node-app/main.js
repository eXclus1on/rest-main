// //  COMMON JS
// const x = require("examplePackage");
// //  ES6
// import x from "examplePackage";

const express = require("express");
const app = express();

const port = 3000;

app.get("/", function(req, res) {
    const data = {
        status: "OK",
        message: "Hello there"
    };

    res.json(data);
});

app.get("/about", function (req, res) {
    res.send("This is the about route!");
});

app.listen(port, function() {
    console.log(`Listening on ${port}`);
});