const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: String,
    arrival: Date
})

const flightSchema = new Schema({
    airline: {type: String, enum: ['American', "Southwest", "United"]},
    airport: {type: String, enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']},
    flightNo: Number,
    departs: Date,
    destinations: [destinationSchema]
});

// compile schema into model and export it
module.exports = mongoose.model("Flight", flightSchema);