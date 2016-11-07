app.factory('UsuarioService', function($http){
    return {
        insert: function(usuario){
            return $http({
                method: 'post',
                url: 'ws/usuario/insert.php',
                data: usuario
            });
        },
        login: function(usuario){
            return $http({
                method: 'post',
                url: 'ws/usuario/login.php',
                data: usuario
            });
        },
        jaExiste: function(usuario){
            return $http({
                method: 'post',
                url: 'ws/usuario/jaExiste.php',
                data: usuario
            });
        },
        select: function(){
            return $http({
                method: 'post',
                url: 'ws/usuario/select.php'
            });
        },
        alterarSenha: function(usuario){
            return $http({
                method: 'post',
                url: 'ws/usuario/alterarSenha.php',
                data: usuario
            });
        }
    };
});
