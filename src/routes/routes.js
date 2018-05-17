'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controller');

router.post('/',controller.post);
router.put('/:id',controller.put);
router.delete('/:id',controller.del);

module.exports = router;