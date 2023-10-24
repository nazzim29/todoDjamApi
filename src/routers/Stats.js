// simple crud router for categorie
const StatController = require("../controllers/StatController");
const router = require("express").Router();

router.get("/", StatController.index);

module.exports = router;
