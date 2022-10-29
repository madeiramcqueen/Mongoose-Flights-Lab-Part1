const Flight = require("../models/flight")

module.exports = {
    new: newFlight,
    index,
    create,
};

function newFlight(req, res) {
    res.render("flights/new");
}

function index(req, res) {
    // movies referes to found Flight documents in MongoDB
    Movie.find({}, function (err, flights) {
        if (err) {
            console.log(err);
            res.redirect("/");
        }
        res.render("flights/index", { flights });
    });
}

function create(req, res) {
    // convert nowShowing's checkbox of nothing or "on" to boolean
    req.body.nowShowing = !!req.body.nowShowing;
    // remove any whitespace at start and end of cast
    req.body.cast = req.body.cast.trim();
    // split cast into an array if it's not an empty string - using a regular expression as a separator
    if (req.body.cast) req.body.cast = req.body.cast.split(/\s*,\s*/);
    const movie = new Movie(req.body);
    // save movie into database
    movie.save(function (err) {
        // if we don't redirect, the new page will be shown
        // with /movies in the address bar
        if (err) return res.redirect("/movies/new");
        console.log(movie);
        // for now, redirect back to new.ejs
        res.redirect("/movies");
    });
}