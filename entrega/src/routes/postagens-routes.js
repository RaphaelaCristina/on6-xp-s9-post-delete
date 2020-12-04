const controller = require('../controller/postagens-controller');
const express = require('express');

const router = express.Router();

/*
@route GET postagens
@desc Retornar  postagens
@access Public 
@endpoint http://localhost:porta/postagens/postagens
*/
router.get('/postagens', controller.getPostagens);

/*
@route GET titulo
@desc Retornar por título
@access Public 
@endpoint http://localhost:porta/postagens/titulo
*/
router.get('/titulo', controller.getTitulo);

/*
@route GET postagens/:id
@desc Retornar  postagem pelo seu id
@access Public 
@endpoint http://localhost:porta/postagens/:id
*/
router.get('/:id', controller.getById);

/*
@route POST postagens
@desc cria uma nova postagem
@acess Public
@endpoint http://localhost:porta/postagens/criar
*/
router.post('/criar', controller.criaPostagem);

/*
@route DELETE postagens
@desc deletar  postagem 
@acess Public
@http://localhost:porta/postagens/:id
*/
router.delete('/:id', controller.deletarPostagem);

module.exports = router; 