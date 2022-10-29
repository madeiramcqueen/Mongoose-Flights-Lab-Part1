var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');

// /* GET flights listing. */
// router.get('/', function (req, res, next) {
//   res.send('respond with a resource');
// });

/* GET all flights listings. */
router.get('/', flightsCtrl.index)

/* POST new flight. */
router.post('/', flightsCtrl.create);

/* GET new movies listing. */
router.get('/new', flightsCtrl.new);

module.exports = router;
