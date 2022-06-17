const BaseService = require('./base-service')
const {User} = require('../models')

class AuthService extends BaseService {
    constructor() {
        super(User);
    }
    async loginUser(loginData) {
        return User.findOne({where: loginData})
    }
}

module.exports = AuthService
