let postagens = require ("../models/postagens-models")
let helper = require ("../helpers/helpers")



//Enviando postagens
const getPostagens = (request, response) => {
    response.status(200).json(postagens)
}

//Buscando por Id

const getById = (request, response) => {
    const id = request.params.id
    const BuscaId = postagens.find(postagem=> postagem.id == id);
    response.status(200).json(BuscaId)
}

const getTitulo = (request, response) => {
    const titulo = request.query.titulo;
    const BuscaTitulo = postagens.find(postagem => postagem.titulo == titulo);
    console.log(findTitulo);
    res.send(findTitulo);
}


//Criar postagem
const criaPostagem = (request, response) => {
    const {titulo, conteudo, tags} = request.body

    let novaPostagem = {
        id: helper.incremento(postagens),
        dataCriacao: helper.data(),
        titulo: titulo,
        conteudo: conteudo,
        tags: tags
    }

    postagens.push(novaPostagem);

    response.status(204).json(novaPostagem);
}


//Deletar postagem
const deletarPostagem = (request, response) => {
    const id = request.params.id;
    response.status(204).json({mensagem: 'Postagem deletada com sucesso!'});
};

module.exports = {
    getById,
    getPostagens,
    getTitulo,
    deletarPostagem,
    criaPostagem
    
}