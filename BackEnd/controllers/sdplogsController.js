// Avaya SDP customer log Backend
// by Bernardo F. Martinez Meave
// Mongo DB Controller routines

const asyncHandler = require('express-async-handler')

const Sdplog = require ('../model/sdplogsModel')

const getSdplogs = asyncHandler( async (req, res) => {
    const sdplogs = await Sdplog.find()
    res.status(200).json(sdplogs)
})

const setSdplogs = asyncHandler(async (req, res) => {
    console.log(req.body)
    if (!req.body.customer_name){
        res.status(400)
        throw new Error("Customer Name required")
    }

    const sdplog = await Sdplog.create({
        customer_name: req.body.customer_name,
        incident_id: req.body.incident_id,
        log_entry: req.body.log_entry,
        hidden: req.body.hidden
    })
    res.status(201).json({ sdplog })
})

const updateSdplogs = asyncHandler(async (req, res) => {
    res.status(200).json({message: `PUT Modify Spdlog ${req.params.id}`})
})


const deleteSdplogs = asyncHandler(async (req, res) => {
    res.status(204).json({message: `DEL delete Sdplog ${req.params.id}`})
})


module.exports = {
    getSdplogs,
    setSdplogs,
    updateSdplogs,
    deleteSdplogs
}