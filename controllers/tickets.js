const Flight = require("../models/flight");
const Ticket = require("../models/ticket");

module.exports = {
    new: newTicket,
    create,
};


function newTicket(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        res.render('tickets/new', { flight })
    })
}

function create(req, res) {
    req.body.flight = req.params.id
    const ticket = new Ticket(req.body);
    ticket.save(function (err) {
        // if (err) return res.redirect('tickets/new');
        //test to see created ticket
        console.log(ticket);
        res.redirect(`/flights/${req.params.id}`)
        //get the flight by id, callback required


    });
}