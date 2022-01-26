const { NODE_ENV } = process.env;

const config = require('../../knexfile')[NODE_ENV];
const knex = require('knex')(config);

module.exports = { knex };
