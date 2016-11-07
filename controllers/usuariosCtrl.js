app.controller('usuariosCtrl',function($scope, $rootScope, RegistroService, UsuarioService, SessaoService, toastr){

    //Validar Sessão
    SessaoService.validar();

    $scope.usuarios = {};
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
    init();

    //Init
    var init = function(){
        var promise = RegistroService.select();
        promise.then(function(response){
            $scope.usuarios = response.data;
        }, function(error){
            toastr.error('Erro de conexão com Servidor','Erro');
        });
    };
    init();

    //Autorizar
    $scope.autorizar = function(usuario, index){
        var promise = UsuarioService.insert(usuario);
        promise.then(function(response){
            $scope.usuarios.splice(index,1);
            desativarSolicitacao(usuario);
            $('.tooltipped').tooltip('remove');
        }, function(error){
            toastr.error('Erro de conexão com Servidor','Erro');
        });
    };

    $scope.rejeitar = function(usuario){
        var index = $scope.usuarios.indexOf(usuario);
        $scope.usuarios.splice(index, 1);
        desativarSolicitacao(usuario);
        $('.tooltipped').tooltip('remove');
    }

    //Desativar solicitação
    var desativarSolicitacao = function(usuario){
        var promise = RegistroService.desativar(usuario);
        promise.then(function(response){

        }, function(error){
            toastr.error('Erro de conexão com Servidor ao desativar solicitação','Erro');
        });
    };
});
