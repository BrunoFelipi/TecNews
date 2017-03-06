app.factory('PublicacaoService',function($http){
    return {
        select: function(){
            return $http({
                method: 'post',
                url: 'ws/publicacao/select.php'
            });
        },
        selectAll: function(){
            return $http({
                method: 'post',
                url: 'ws/publicacao/selectAll.php'
            });
        },
        selectPublicacao: function(id){
            return $http({
                method: 'post',
                url: 'ws/publicacao/selectPublicacao.php',
                data: {id: id}
            });
        },
        desativar: function(id, ativo){
            return $http({
                method: 'post',
                url: 'ws/publicacao/desativar.php',
                data: {id: id, ativo: ativo}
            });
        },
        insert: function(idUsuario, tipo, titulo, conteudo, tag, usuario){
            return $http({
                method: 'post',
                url: 'ws/publicacao/insert.php',
                data: {idUsuario: idUsuario, tipo: tipo, titulo: titulo, conteudo: conteudo, tag: tag, usuario: usuario}
            });
        },
        update: function(idPublicacao, idUsuario, tipo, titulo, conteudo, tag){
            return $http({
                method: 'post',
                url: 'ws/publicacao/update.php',
                data: {idPublicacao: idPublicacao, idUsuario: idUsuario, tipo: tipo, titulo: titulo, conteudo: conteudo, tag: tag}
            });
        },
        delete: function(id){
            return $http({
                method: 'post',
                url: 'ws/publicacao/delete.php',
                data: {id: id}
            });
        }
    };
});
