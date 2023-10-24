// Category model definition

const mongoose = require("mongoose");
const SubCategorySchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Please add a name"],
		trim: true,
	},
	description: {
		type: String,
		required: [true, "Please add a description"],
		trim: true,
	},
});

const CategorySchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Please add a name"],
		trim: true,
		unique: true,
	},
	description: {
		type: String,
		required: [true, "Please add a description"],
		trim: true,
	},
	subCategories: {
		type: [SubCategorySchema],
		required: false,
	},
	couleur: {
		type: String,
		required: false,
		trim: true,
	}
});
module.exports = mongoose.model("Category", CategorySchema);
