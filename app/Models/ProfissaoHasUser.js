'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ProfissaoHasUser extends Model {
    profissao(){
        return this.belongsTo("App/Models/Profissao")
    }

    user(){
        return this.belongsTo("App/Models/User")
    }
}

module.exports = ProfissaoHasUser
