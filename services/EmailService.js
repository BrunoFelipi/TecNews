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
        selectEmail: function(token){
            return $http({
                method: 'post',
                url: 'ws/email/selectEmail.php',
                data: {token: token}
            });
        },
        existEmail: function(email){
            return $http({
                method: 'post',
                url: 'ws/email/existEmail.php',
                data: {email: email}
            });
        },
        enviarEmailCadastroSucesso: function(email, nome){
            return $http({
                method: 'post',
                url: 'ws/email/enviarEmailCadastroSucesso.php',
                data: {email: email, nome: nome}
            });
        },
        enviarEmailNovaPublicacao: function(para, tipo, titulo, conteudo, tag, nomeImagem){
            return $http({
                method: 'post',
                url: 'ws/email/enviarEmailNovaPublicacao.php',
                data: {para: para, tipo: tipo, titulo: titulo, conteudo: conteudo, tag: tag, nomeImagem: nomeImagem}
            });
        },

        enviarEmailEditarPublicacao: function(para, tipo, titulo, conteudo, tag, nomeImagem){
            return $http({
                method: 'post',
                url: 'ws/email/enviarEmailEditarPublicacao.php',
                data: {para: para, tipo: tipo, titulo: titulo, conteudo: conteudo, tag: tag, nomeImagem: nomeImagem}
            });
        },

        enviarEmailCadastroAceito: function(email, nome){
            return $http({
                method: 'post',
                url: 'ws/email/enviarEmailCadastroAceito.php',
                data: {email: email, nome: nome}
            });
        },
        
        enviarEmailCadastroRejeitado: function(email, nome){
            return $http({
                method: 'post',
                url: 'ws/email/enviarEmailCadastroRejeitado.php',
                data: {email: email, nome: nome}
            });
        },
        
        deleteEmail: function(email){
            return $http({
                method: 'post',
                url: 'ws/email/delete.php',
                data: {email: email}
            });
        },
        
        selectAllEmailsCadastrados: function(){
            return $http({
                method: 'post',
                url: 'ws/email/selectAllEmailsCadastrados.php'
            });
        },

        selectQtdEmailsCadastrados: function(){
            return $http({
                method: 'post',
                url: 'ws/email/selectQtdEmailsCadastrados.php'
            });
        },


    };
});
