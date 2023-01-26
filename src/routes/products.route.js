const express = require('express'),
router = express.Router(),
products = require('../controller/products.controller');

router.get('/', products.getAll);

router.get('/:id', products.getById);

router.post('/', products.create);

router.put('/:id', products.update);

router.delete('/:id', products.delete);  /*Uses preferible to update products  in database.*/ 

module.exports = router;