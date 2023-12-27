// Avaya SDP customer log Backend
// by Bernardo F. Martinez Meave
// Express Router

const express = require ('express')
const router = express.Router()
const {getSdplogs, setSdplogs, updateSdplogs, deleteSdplogs} = require('../controllers/sdplogsController')
const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getSdplogs).post(protect, setSdplogs)

router.route('/:id').delete(protect, deleteSdplogs).put(protect, updateSdplogs)

module.exports = router