'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfissaoSchema extends Schema {
  up () {
    this.create('profissaos', (table) => {
      table.increments()
      table.string('nome', 50).notNullable().unique()
      table.string('descricao', 254).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('profissaos')
  }
}

module.exports = ProfissaoSchema
