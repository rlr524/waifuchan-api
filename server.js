require("dotenv").config;
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const _ = require("lodash");

const app = express();
const dbPassword = process.env.DB_PASS;

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(
	`mongodb+srv://waifu-service:${dbPassword}@cluster0.mdczd.mongodb.net/waifus?retryWrites=true&w=majority`,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	}
);
