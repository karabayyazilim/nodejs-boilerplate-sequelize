const httpStatus = require('http-status')
const {passwordHash, generateAccessToken, generateRefreshToken} = require('../scripts/utils/helper')
const Service = require('../services/auth')
const authService = new Service()

class Auth {
    async login(req, res) {
        req.body.password = passwordHash(req.body.password)
        await authService.loginUser(req.body)
            .then((user) => {
                if (!user) return res.status(httpStatus.NOT_FOUND).send({message: "Böyle bir kullanıcı bulunamadı!"})
                console.log()
                user = {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    tokens: {
                        access_token: generateAccessToken(user),
                        refresh_token: generateRefreshToken(user)
                    }
                }
                console.log(user)
                delete user.password
                res.status(httpStatus.OK).send(user)
            })
            .catch(error => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.toString()))
    }
}

module.exports = new Auth()
