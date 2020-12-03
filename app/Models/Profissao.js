'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Profissao extends Model {
    categoria(){
        return this.belongsToMany('App/Models/categoria').pivotTable('categoria_has_profissao')
    }
    user(){
        return this.belongsToMany('App/Models/User').pivotTable('profissao_haS_user')
    }
}

module.exports = Profissao
