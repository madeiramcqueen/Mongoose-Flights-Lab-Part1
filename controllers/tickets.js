const Flight = require("../models/flight")

module.exports = {
new: newTicket
};


function newTicket (req, res) {
    Flight.findById(req.params.id, function(err, flight ){
       res.render('tickets/new', {flight}) 
    })
}
/*
//function create(req, res) {
//     console.log("ticket is created!")
//     Flight.findById(req.params.id, function (err, flight) {
//         Ticket.find({flight: flight._id}, function(err, tickets))
//         flight.tickets.push(req.body);
//         ticket.save(function (err) {
//             res.redirect(`/flights/${ticket._id}`)
//         })
//     })
// }; */