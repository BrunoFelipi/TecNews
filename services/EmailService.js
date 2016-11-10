app.factory('EmailService', function($http){
    return {
        insert: function(email){
            return $http({
                method: 'post',
                url: 'ws/email/cadastrarEmail.php',
                data: {email: email}
            });
        },
        selectAll: function(){
            return $http({
                method: 'post',
                url: 'ws/email/selectAll.php'
            });
        },
        existEmail: function(email){
            return $http({
                method: 'post',
                url: 'ws/email/existEmail.php'
            });
        },
        enviarEmailCadastroSucesso: function(email, nome){
            return $http({
                method: 'post',
                url: 'ws/email/enviarEmailCadastroSucesso.php',
                data: {email: email, nome: nome}
            });
        },
        enviarEmailNovaPublicacao: function(de, para, tipo, titulo, conteudo, tag){
            return $http({
                method: 'post',
                url: 'ws/email/enviarEmailNovaPublicacao.php',
                data: {de: de, para: para, tipo: tipo, titulo: titulo, conteudo: conteudo, tag: tag}
            });
        },

        enviarEmailEditarPublicacao: function(de, para, tipo, titulo, conteudo, tag){
            return $http({
                method: 'post',
                url: 'ws/email/enviarEmailEditarPublicacao.php',
                data: {de: de, para: para, tipo: tipo, titulo: titulo, conteudo: conteudo, tag: tag}
            });
        },


    };
});
