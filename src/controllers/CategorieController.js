
const Categorie = require("../models/Category")


module.exports = class CategorieController {
    static async index(req, res) {
        // fetch all categories with filter in query
        const { query } = req.query;
        const filter = query ? { name: { $regex: new RegExp(query), $options: "i" } } : {};
        // fetch all categories
        const cats = await Categorie.find(filter).populate("subCategories");
        if (!cats) return res.status(404).json({ message: "categories not found" });

        return res.json(cats);
    }
    static async store(req, res) {
        // create new categorie
        const data = req.body;
        const cat = await Categorie.create(data);
        if (!cat) return res.status(500).json({ message: "categorie not created" });
        return res.json(cat.toJSON());
    }
    static async show(req, res) {
        // fetch categorie by id
        const { id } = req.params;
        const cat = await Categorie.findById(id);
        if (!cat) return res.status(404).json({ message: "categorie not found" });
        return res.json(cat);
    }
    static async update(req, res) {
        // update categorie by id
        const { id } = req.params;
        const data = req.body;
        const cat = await Categorie.findOneAndUpdate({ _id: id }, data, { new: true });
        res.json(cat);
    }
}