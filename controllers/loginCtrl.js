app.controller('loginCtrl', function($scope, $rootScope, $location, UsuarioService, SessaoService, toastr){

    $scope.usuario = {};

    //Logar
    $scope.logar = function(usuario){
        var promise = UsuarioService.login($scope.usuario);
        promise.then(function(response){
            if(response.data == 'true'){
				Materialize.toast('Olá de novo, jovem...',4000);
                $location.path('listar');
                $rootScope.usuario.nome = $scope.usuario.nome;
                $rootScope.usuario.email = $scope.usuario.email;
            } else {                
                Materialize.toast('Usuario ou Senha incorretos', 4000);
                $scope.usuario = {};
                $('#email').focus();
            }
        }, function(error){            
            Materialize.toast('Erro de conexão com o<br>servidor', 4000);
        });
    };

});
