// simple crud router for categorie
const CategorieController = require('../controllers/CategorieController');
const router = require('express').Router();


router.get('/', CategorieController.index);
router.post('/', CategorieController.store);
router.get('/:id', CategorieController.show);
router.put('/:id', CategorieController.update);

module.exports = router;