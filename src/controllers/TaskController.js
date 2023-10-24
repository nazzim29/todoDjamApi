// controller class for task
const Task = require("../models/Task");
const moment = require("moment");
module.exports = class TaskController {
	static async index(req, res) {
		// fetch all tasks with filter in query by name, categorie and date
		const { query, date, cat } = req.query;
		console.log("🚀 ~ file: TaskController.js:8 ~ TaskController ~ index ~ date:", date)
		const filter = query
			? { name: { $regex: new RegExp(query), $options: "i" } }
			: {};
		if (date) filter.createdAt = {
			$gte: moment(date).startOf('day').toDate(),
			$lte: moment(date).endOf('day').toDate()
		}
		if (cat) filter.categorie = cat;
		// fetch all tasks
		const tasks = await Task.find(filter);
		if (!tasks) return res.status(404).json({ message: "tasks not found" });
		return res.json(tasks);
	}
	static async store(req, res) {
		// create new task
		const data = req.body;
		const task = await Task.create(data);
		if (!task) return res.status(500).json({ message: "task not created" });
		return res.json(task);
	}
	static async show(req, res) {
		// fetch task by id
		const { id } = req.params;
		const task = await Task.findById(id);
		if (!task) return res.status(404).json({ message: "task not found" });
		return res.json(task);
	}
	static async update(req, res) {
		// update task by id
		const { id } = req.params;
		const data = req.body;
		// find and update task
		const task = await Task.findOneAndUpdate({ _id: id }, data, {
			new: true,
        });
        if (!task) return res.status(404).json({ message: "task not found" });
        res.json(task);
	}
};
