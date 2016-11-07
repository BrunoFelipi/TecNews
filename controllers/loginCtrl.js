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
                toastr.error('Usuario ou Senha incorretos','Erro');
                $scope.usuario = {};
                $('#email').focus();
            }
        }, function(error){
            toastr.error('Erro de conexão com o Servidor','Erro');
        });
    };

});
