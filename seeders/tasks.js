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
const taches = [
	{
		title: "Réunion d'équipe",
		description: "Participer à la réunion d'équipe hebdomadaire",
		categorie: "Travail",
	},
	{
		title: "Nettoyer la cuisine",
		description: "Laver la vaisselle et nettoyer le plan de travail",
		categorie: "Ménage",
	},
	{
		title: "Entraînement au gymnase",
		description: "Faire une séance d'entraînement cardio et musculation",
		categorie: "Sport",
	},
	{
		title: "Lire un livre",
		description: "Passer du temps à lire un roman passionnant",
		categorie: "Loisirs",
	},
	{
		title: "Préparer le rapport",
		description: "Compiler les données et rédiger un rapport pour le client",
		categorie: "Travail",
	},
	// Ajoutez d'autres tâches ici...
	{
		title: "Cours de guitare",
		description: "Pratiquer la guitare pendant une heure",
		categorie: "Loisirs",
	},
	{
		title: "Faire les courses",
		description: "Acheter des produits d'épicerie pour la semaine",
		categorie: "Ménage",
	},
	{
		title: "Réviser pour l'examen",
		description: "Revoir les notes et préparer l'examen à venir",
		categorie: "Études",
	},
	// Ajoutez d'autres tâches ici...
];
const startDate = new Date("2023-09-01");
const endDate = new Date("2023-10-31");
function generateRandomDate(startDate, endDate) {
	const startTimestamp = startDate.getTime();
	const endTimestamp = endDate.getTime();

	if (startTimestamp >= endTimestamp) {
		throw new Error("La date de début doit être antérieure à la date de fin.");
	}

	const randomTimestamp =
		startTimestamp + Math.random() * (endTimestamp - startTimestamp);
	return new Date(randomTimestamp);
}

mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(async () => {
		const Task = require("../src/models/Task");
		const Category = require("../src/models/Category");
        Promise.all([...new Array(1200)].map(async () => {
            let dd = generateRandomDate(startDate, endDate);
            let tt = taches[Math.floor(Math.random() * taches.length)];
            let cat = await Category.findOne({ name: tt.categorie });
            return {
                ...tt,
                category: cat._id,
                createdAt: dd,
                updatedAt: dd,
            };
        })).then((tasks) => {
            Task.insertMany(tasks);
        });
	});
