const BaseService = require('./base-service')
const {User} = require('../models')

class UserService extends BaseService {
    constructor() {
        super(User)
    }
}

module.exports = UserService
