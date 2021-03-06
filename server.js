var express = require("express"),
	bodyParser = require("body-parser"),
    mongojs = require("mongojs"),
	app = express();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.post("/questionList", function(req, res){
	console.log(req.body);
	db.questionList.insert(req.body, function(err, doc){
		res.json(doc);
	})
});

app.listen(1000);
console.log("Server running on port 1000");