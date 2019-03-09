'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.body = 'hi, egg';
    throw ctx.helper.createError('error message', '0101' )
  }
}

module.exports = HomeController;
