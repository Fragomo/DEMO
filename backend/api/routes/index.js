const router = require('express').Router()


router.use('/auth', require('./auth.route')) //Functions of Signup and Login for all users
router.use('/user', require('./user.route'))


module.exports = router
