const knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'postgres',
    password: 'database1270',
    database: 'ong_adote_ja',
    port: 5432
  }
});

module.exports = knex;