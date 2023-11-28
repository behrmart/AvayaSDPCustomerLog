const express = require ('express')
const router = express.Router()
const {getSdplogs, setSdplogs, updateSdplogs, deleteSdplogs} = require('../controllers/sdplogsController')

router.route('/').get(getSdplogs).post(setSdplogs)

router.route('/:id').delete(deleteSdplogs).put(updateSdplogs)

module.exports = router