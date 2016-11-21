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
            toastr.error('Erro de conexão com o Servidor ao trazer usuario','Erro');
        });
    };

    //alterarSenha
    $scope.alterarSenha = function(usuario){
        if(usuario.senha != usuario.confSenha) {
            toastr.error('As senhas não conferem','Erro');
            return;
        }
        var promise = UsuarioService.alterarSenha(usuario);
        promise.then(function(response){
            if(response.data == 'false'){
                toastr.error('A senha anterior informada está incorreta','Erro');
            } else {
                toastr.success('Senha alterada','Erro');
                $scope.usuario.senhaAnterior = '';
                $scope.usuario.senha = '';
                $scope.usuario.confSenha = '';
            }
        }, function(error){
            toastr.error('Erro de conexão com o Servidor ao trazer usuario','Erro');
        });
    };

	init();
});
