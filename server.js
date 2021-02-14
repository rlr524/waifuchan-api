const express = require("express");
const bodyParser = require("body-parser");
require("./initDB")();
const mongoose = require("mongoose");
// const _ = require("lodash");
const Schema = mongoose.Schema;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const waifuSchemaShort = new Schema({
	waifuId: Number,
	fullNameEn: String,
	animeMainSeries: String,
	profileImageURL: String,
	deleted: Boolean,
});

const Waifu = mongoose.model("Waifu", waifuSchemaShort);

app.route("/waifus").get((req, res) => {
	Waifu.find({}, (err, foundWaifus) => {
		if (err) {
			res.send(err);
		} else {
			res.send(foundWaifus);
		}
	});
});

app.listen(process.env.PORT || 3000, () => {
	let port = process.env.PORT || 3000;
	console.log("Waifu-chan API service started on port " + port);
});
