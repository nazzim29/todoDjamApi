// a simple router for crud task


const TaskController= require('../controllers/TaskController')

const router = require('express').Router();



router.get('/', TaskController.index);
router.post('/', TaskController.store);
router.get('/:id', TaskController.show);
router.put('/:id', TaskController.update);



module.exports = router;