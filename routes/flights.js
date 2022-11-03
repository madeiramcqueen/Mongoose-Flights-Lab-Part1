var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');
var destinationsCtrl = require('../controllers/destinations');

/* GET all flights listings. */
router.get('/', flightsCtrl.index)

/* POST new flight. */
router.post('/', flightsCtrl.create);

/* GET new flights listing. */
router.get('/new', flightsCtrl.new);

/* SHOW flight details. */
router.get('/:id', flightsCtrl.show);

/* POST flight destination details. */
router.post('/:id/destinations', destinationsCtrl.create)

module.exports = router;
