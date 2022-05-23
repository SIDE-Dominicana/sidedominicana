const express = require('express'),
router = express.Router(),
subscriber = require('../controller/subscribers.controller');

router.get('/', subscriber.getAll);

router.get('/:id', subscriber.getById);

router.post('/', subscriber.create);

router.put('/:id', subscriber.update);

router.delete('/:id', subscriber.delete);

module.exports = router;