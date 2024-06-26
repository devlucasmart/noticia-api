module.exports.formulario_inclusao_noticia = function(application, req, res){
    res.render("admin/form_add_noticia", {validacao : {}, noticia : {}});
}

module.exports.noticias_salvar = function(application, req, res) {

    var noticia = req.body;

    req.assert('titulo', 'Título é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo é Obrigatório').notEmpty();
    req.assert('resumo', 'Resumo deve conter entre 10 e 255 caracteres').len(10, 100);
    req.assert('autor', 'Autor é Obrigatório').notEmpty();
    req.assert('data_noticia', 'Data é obrigatório').notEmpty();
    req.assert('noticia', 'Notícia é Obrigatória').notEmpty();

    var erros = req.validationErrors();

    if(erros){
        res.render('admin/form_add_noticia', { validacao : erros, noticia : noticia });
        return;
    }


    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.salvarNoticia(noticia, function(error, result){
        res.redirect('/noticias');
    });

}