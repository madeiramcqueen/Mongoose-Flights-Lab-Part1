var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');

/* GET all flights listings. */
router.get('/', flightsCtrl.index)

/* POST new flight. */
router.post('/', flightsCtrl.create);

/* GET new flights listing. */
router.get('/new', flightsCtrl.new);

module.exports = router;
