// Avaya SDP customer log Backend
// by Bernardo F. Martinez Meave
// Mongo DB Mongoose driver schema definition

const { hidden } = require('colors')
const mongoose = require('mongoose')

const sdplogSchema = mongoose.Schema({
    customer_name: String,
    incident_id: String,
    log_entry: [
        {
            log_date: Date,
            log_technology: String,
            log_body: String
        }
    ],
    hidden: Boolean
}, {
    timestamps: true // crea campos automaticos de timestamps
})

module.exports = mongoose.model('Sdplog', sdplogSchema)  // MOdelo en  Letra Capital en singular por "tareas" collection