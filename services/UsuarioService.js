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
        jaCadastrado: function(email){
            return $http({
                method: 'post',
                url: 'ws/usuario/jaCadastrado.php',
                data: {email: email}
            });
        },
        cadastroPendente: function(email){
            return $http({
                method: 'post',
                url: 'ws/usuario/cadastroPendente.php',
                data: {email: email}
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
