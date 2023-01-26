const express = require('express'),
router = express.Router(),
blog = require('../controller/blog.controller');

router.get('/', blog.getAll);

router.get('/:id', blog.getById);

router.post('/', blog.create);

router.put('/:id', blog.update);

router.delete('/:id', blog.delete);

module.exports = router;