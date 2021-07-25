const knex = require('knex')({
    client: 'pg',
    connection: {
      host : 'localhost',
      user : 'postgres',
      password : '123456',
      database : 'ong_adote_ja'
    }
});

module.exports = knex;