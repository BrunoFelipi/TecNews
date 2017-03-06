app.controller('alterarSenhaCtrl',function($scope, $rootScope, UsuarioService, SessaoService, toastr){

    //Validar Sessão
    SessaoService.validar();

    $scope.usuarioLogado = {};

    //Carregar usuarios
    var init = function(){
        var promise = UsuarioService.select();
        promise.then(function(response){
            $scope.usuarioLogado = response.data[0];
        }, function(error){            
            Materialize.toast('Erro de conexão com<br>o Servidor ao trazer usuário',2000);
        });
    };

    //alterarSenha
    $scope.alterarSenha = function(usuario){
        if(usuario.senha != usuario.confSenha) {            
            Materialize.toast('As senhas não conferem',2000);
            return;
        }
        var promise = UsuarioService.alterarSenha(usuario);
        promise.then(function(response){
            if(response.data == 'false'){                
                Materialize.toast('A senha anterior informada<br>está incorreta',2000);
            } else {                
                Materialize.toast('Senha alterada',2000);
                $scope.usuario.senhaAnterior = '';
                $scope.usuario.senha = '';
                $scope.usuario.confSenha = '';
            }
        }, function(error){            
            Materialize.toast('Erro de conexão com<br>o Servidor ao trazer usuário',2000);
        });
    };

	init();
});
