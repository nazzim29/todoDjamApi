const Task = require("../models/Task");

module.exports = class StatController {
	static async index(req, res) {
        const { startDate, endDate } = req.query;
        


		// count task by categorie for each day between start and end date
		const stats = await Task.aggregate([
			{
				$match: {
					createdAt: {
						$gte: new Date(startDate),
						$lte: new Date(endDate) ,
					},
				},
			},
			{
				$group: {
					_id: {
						date: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
						category: "$category",
					},
					total: { $sum: 1 },
					tasks: { $push: "$$ROOT" },
				},
			},
			{
				$lookup: {
					from: "categories",
					localField: "_id.category",
					foreignField: "_id",
					as: "_id.category",
				},
			},
			{
				$group: {
					_id: "$_id.date",
					total: { $sum: "$total" },
					categories: {
						$push: {
							category: { $first: "$_id.category" },
							count: "$total",
						},
					},
					tasks: { $addToSet: "$tasks" },
				},
			},
			{
				$project: {
					_id: 0,
					date: "$_id",
					total: 1,
					categories: 1,
					tasks: 1,
				},
			},
		
		]);

		return res.json(stats);
	}
};
