const httpStatus = require('http-status')
const JWT = require('jsonwebtoken')

const authToken = (req, res, next) => {
    const token = req.headers?.authorization?.split(' ')[1] || null
    if (token === null) return res.status(httpStatus.UNAUTHORIZED).send({error: "Bu işlemi yapmak için giriş yapmalısınız."})

    JWT.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY, (err, user) => {
        if (err) return res.status(httpStatus.UNAUTHORIZED).send({error: "Invalid token..."})
        req.user = user
        next()
    })
}

module.exports = authToken
