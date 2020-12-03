'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfissaoHasUserSchema extends Schema {
  up () {
    this.create('profissao_has_users', (table) => {
      table.increments()
      table.integer("id_profissao").unsigned()
      .references("id").inTable("profissaos")
      .onUpdate("cascade").onDelete("cascade")
      .notNullable()
      table.integer("id_users").unsigned()
      .references("id").inTable("users")
      .onUpdate("cascade").onDelete("cascade")
      .notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('profissao_has_users')
  }
}

module.exports = ProfissaoHasUserSchema
