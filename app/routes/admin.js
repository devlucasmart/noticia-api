module.exports = function(application) {

        application.get('/formulario_inclusao_noticia', function(req, res){
            var noticia = {
                titulo: req.body.titulo || '',
                resumo: req.body.resumo || '',
                autor: req.body.autor || '',
                data_noticia: req.body.data_noticia || '',
                noticia: req.body.noticia || ''
            };
            res.render("admin/form_add_noticia", {errors:{}, noticia : noticia});
        });

        application.post('/noticias/salvar', function(req, res){
            var noticia = req.body;

            req.assert('titulo', 'Título é obrigatório').notEmpty();
            req.assert('resumo', 'Resumo é Obrigatório').notEmpty();
            req.assert('resumo', 'Resumo deve conter entre 10 e 255 caracteres').len(10, 100);
            req.assert('autor', 'Autor é Obrigatório').notEmpty();
            req.assert('data_noticia', 'Data é obrigatório').notEmpty();
            req.assert('noticia', 'Notícia é Obrigatória').notEmpty();

            var erros = req.validationErrors();
    
            if(erros){
                res.render('admin/form_add_noticia', { errors: erros, noticia : noticia });
                return;
            }
    

            var connection = application.config.dbConnection();
            var noticiasModel = new application.app.models.NoticiasDAO(connection);
    
            noticiasModel.salvarNoticia(noticia, function(error, result){
                res.redirect('/noticias');
            });
        });     
    }
