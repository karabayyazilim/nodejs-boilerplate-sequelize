const router = require('express').Router()
const UserRoutes = require('./users')
const AuthRoutes = require('./auth')
const authenticate = require('../middleware/auth')

router.use('/user', authenticate,UserRoutes)
router.use('/', AuthRoutes)

module.exports = router
