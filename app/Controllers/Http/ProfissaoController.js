'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with profissaos
 */

const Profissao = use("App/Models/Profissao")

class ProfissaoController {
  /**
   * Show a list of all profissaos.
   * GET profissaos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const Profissaos = await Profissao.all();
    return Profissaos
  }


  /**
   * Display a single profissao.
   * GET profissaos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const Profissaos = await Profissao.findOrFail(params.id);
    return Profissaos;
  }

}

module.exports = ProfissaoController
