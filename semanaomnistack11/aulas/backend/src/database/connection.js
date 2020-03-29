const knex = require('knex');
const configuration = require('../../knexfiel');

const connection = kex(configuration.development);

module.exports=connection;