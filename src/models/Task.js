// Task model definition

const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, "Please add a title"],
			trim: true,
		},
		description: {
			type: String,
			required: [true, "Please add a description"],
			trim: true,
		},
		category: {
			type: mongoose.Schema.ObjectId,
			ref: "Category",
			required: false,
		},
		SubCategoryIdx: {
            type: mongoose.Schema.Types.Number,
            required: false,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Task", TaskSchema);
