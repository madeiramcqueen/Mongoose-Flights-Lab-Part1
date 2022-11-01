const Flight = require("../models/flight")

module.exports = {
    new: newFlight,
    create,
    index,
    show,
};

function newFlight(req, res) {
    res.render("flights/new");
}

function create(req, res) {
    const flight = new Flight(req.body);
    // save flight into database
    flight.save(function (err) {
        // if we don't redirect, the new page will be shown
        // with /flights in the address bar
        if (err) return res.redirect("/flights/new");
        console.log(flight);
        // for now, redirect back to new.ejs
        res.redirect("/flights");
    });
}

function index(req, res) {
    // flights refers to found Flight documents in MongoDB
    Flight.find({}, function (err, flights) {
        if (err) {
            console.log(err);
            res.redirect("/");
        }
        res.render("flights/index", { flights });
    });
}

function show(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        res.render('flights/show', { flight })
    })
}