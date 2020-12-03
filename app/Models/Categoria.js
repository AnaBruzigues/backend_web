'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Categoria extends Model {
    profissao(){
        return this.belongsToMany('App/Models/Profissao').pivotTable('categoria_has_profissao')
    }
}

module.exports = Categoria
