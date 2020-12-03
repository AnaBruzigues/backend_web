'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AgendamentoSchema extends Schema {
  up () {
    this.create('agendamentos', (table) => {
      table.increments()
      table.datetime('data').notNullable().unique()
      table.integer("id_user").unsigned()
      .references("id").inTable("users")
      .onUpdate("cascade").onDelete("cascade")
      .notNullable()
      table.integer("id_user1").unsigned()
      .references("id").inTable("users")
      .onUpdate("cascade").onDelete("cascade")
      .notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('agendamentos')
  }
}

module.exports = AgendamentoSchema
