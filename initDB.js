const { connect, connection } = require("mongoose");
const { config } = require("dotenv");

module.exports = () => {
	config();

	// const dbName = process.env.DB_NAME;
	// const user = process.env.DB_USER;
	// const pass = process.env.DB_PASS;
	const uri = `mongodb+srv://waifu-service:<password>@cluster0.mdczd.mongodb.net/waifuchanDB?retryWrites=true&w=majority`;

	connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true,
	})
		.then(() => {
			console.log("Connection established with MongoDB");
		})
		.catch((error) => console.error(error.message));

	connection.on("connected", () => {
		console.log("Mongoose connected to DB Cluster");
	});
};
