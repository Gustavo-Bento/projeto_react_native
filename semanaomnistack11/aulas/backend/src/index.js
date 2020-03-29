const express = require('express');
const cors = require ('cors');
const routes = require('./routes');

const app = express();

app.use(express.json());
/**
 * Rota/ recurso
 */

/**
 * Metodos HTTP;
 * 
 * GET: Busca/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deleta uma informação no back-end
 * 
 */
/**
 * Tipos de paramentros
 * 
 * Query Params: Parametros nomeados na rota após "?" (Filtros, paiginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 *  
 */
/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

 /**
  * Driver: SELECT + FROM users
  * Query Builder:table('users').select('*').where(.)
  *
  */

app.use(routes);

app.listen(3333);

