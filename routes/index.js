const express = require('express')
const router = express.Router()

/* Get Home Page */
router.get('/'. (req, res, next) => {
	res.render('index', { title: 'Mile 37' })
})

module.exports = router