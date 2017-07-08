var express = require("express"),
	bodyParser = require("body-parser"),
	app = express();

app.use(express.static(__dirname, + "/public"));

app.listen(1000);
console.log("Server running on port 1000");