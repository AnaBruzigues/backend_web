'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class CategoriaHasProfissao extends Model {
    categoria(){
        return this.belongsTo("App/Models/Categoria")
    }

    profissao(){
        return this.belongsTo("App/Models/Profissao")
    }   
}

module.exports = CategoriaHasProfissao
