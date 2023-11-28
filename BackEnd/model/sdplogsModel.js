const mongoose = require('mongoose')

const sdplogSchema = mongoose.Schema({
    customer: {
        type: String,
        required: [true, "Customer required"]
    },
    incident: {
        type: String
    },
    logentry: {
        type: String
    }
}, {
    timestamps: true // crea campos automaticos de timestamps
})

module.exports = mongoose.model('Sdplog', sdplogSchema)  // MOdelo en  Letra Capital en singular por "tareas" collection