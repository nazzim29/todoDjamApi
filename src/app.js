const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const errorHandler = require("./middlewares/errorHandler");
const notFound = require("./middlewares/notFound");

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors({origin:'*'}));
app.use(express.json());

app.get("/", (req, res) => {
	res.set("Content-Type", "application/json");
	res.json({
		message: "hello world",
	});
});
app.use("/api/v1/tasks", require("./routers/task"));
app.use("/api/v1/categories", require("./routers/categorie"));
app.use("/api/v1/stats", require("./routers/Stats"));
app.use(notFound);
app.use(errorHandler);
// connect mongo db on app launch

module.exports = app;
