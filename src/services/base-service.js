let BaseModel = null

class BaseService {
    constructor(model) {
        BaseModel = model
    }

    async list(where) {
        return await BaseModel?.findAll(where || {}) ?? null
    }

    async create(data) {
        return await BaseModel?.build(data).save()
    }

    async update(id, data) {
        return await BaseModel.update(data, {where: {id: id}})
    }

    async delete(id) {
        return await BaseModel.destroy({where: {id: id}})
    }
}

module.exports = BaseService
