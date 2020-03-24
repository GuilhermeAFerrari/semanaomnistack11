/**
 * Anotações
 * 
 */

/**
 * Rota /Recurso
 */

 /**
  * Metodos HTTP
  * 
  * GET: Buscar/Listar uma informação no back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletear uma informação no back-end
  */

  /**
   * Tipos de Parâmetros:
   * 
   * Query Params: Parâmetros nomeados enviados na rota após o símbolo de interrogação (?) )(Filtros, paginação)
   * Rote Params: Parâmetros utilizados para identificar recursos
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   */

   /**
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Mucrosoft SQL Server
    * NoSQL, MongoDB, CouchDB, etc
    */

    /**
     * Drive: SELECT * FROM users
     * Query Builder: table('users').select('*').where()
     */


const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use (cors());
app.use(express.json());
app.use(routes);

app.listen(3333);