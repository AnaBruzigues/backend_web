'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategoriaHasProfissaoSchema extends Schema {
  up () {
    this.create('categoria_has_profissaos', (table) => {
      table.increments()
      table
      .integer("id_categorias").unsigned()
      .references("id").inTable("categorias")
      .onUpdate("cascade").onDelete("cascade")
      .notNullable()
      table
      .integer("id_profissao").unsigned()
      .references("id").inTable("profissaos")
      .onUpdate("cascade").onDelete("cascade")
      .notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('categoria_has_profissaos')
  }
}

module.exports = CategoriaHasProfissaoSchema
