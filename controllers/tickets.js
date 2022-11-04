// const Ticket = require("../models/ticket")

// module.exports = {
// create,
// };

// function create(req, res) {
//     console.log("ticket is created!")
//     Flight.findById(req.params.id, function (err, flight) {
//         Ticket.find({flight: flight._id}, function(err, tickets))
//         flight.tickets.push(req.body);
//         ticket.save(function (err) {
//             res.redirect(`/flights/${ticket._id}`)
//         })
//     })
// };