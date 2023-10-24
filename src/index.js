require("dotenv").config();

const app = require("./app");
const mongoose = require("mongoose");

const port = process.env.PORT || 5000;
mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		app.listen(port, () => {
			/* eslint-disable no-console */
			console.log(`Listening: http://localhost:${port}`);
			/* eslint-enable no-console */
		});
	})
	.catch((err) => {
		console.log(err);
	});
