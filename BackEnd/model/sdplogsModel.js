// Avaya SDP customer log Backend
// by Bernardo F. Martinez Meave
// Mongo DB Mongoose driver schema definition

const { hidden } = require('colors')
const mongoose = require('mongoose')

const sdplogSchema = mongoose.Schema({
    log_user: { 
        type: mongoose.Schema.Types.ObjectId,  // Agregar ususarios referenciado a collecion de Users
        required: true,
        ref: 'User'
    },
    log_customer: String,
    log_incident_id: String,
    log_technology: String,
    log_entry: [
        {
            log_date: Date,
            log_body: String
        }
    ],
    hidden: Boolean
}, {
    timestamps: true // crea campos automaticos de timestamps
})

module.exports = mongoose.model('Sdplog', sdplogSchema)  // MOdelo en  Letra Capital en singular por "tareas" collection