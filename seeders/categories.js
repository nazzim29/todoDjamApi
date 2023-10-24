require("dotenv").config();
const mongoose = require("mongoose");
const categoriesDeTaches = [
	{
		name: "Travail",
		description:
			"Tâches liées au travail et aux responsabilités professionnelles",
		couleur: "#3498db",
	},
	{
		name: "Ménage",
		description: "Tâches de nettoyage et d'entretien de la maison",
		couleur: "#e74c3c",
	},
	{
		name: "Sport",
		description: "Tâches liées à l'exercice physique et au bien-être",
		couleur: "#2ecc71",
	},
	{
		name: "Études",
		description: "Tâches liées aux études et à l'apprentissage",
		couleur: "#9b59b6",
	},
	{
		name: "Loisirs",
		description: "Tâches liées aux loisirs et aux activités de détente",
		couleur: "#f39c12",
	},
];

mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		const Category = require("../src/models/Category");
		Category.insertMany(categoriesDeTaches);
	});
