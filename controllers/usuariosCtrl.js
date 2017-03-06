app.controller('usuariosCtrl',function($scope, $rootScope, RegistroService, UsuarioService, SessaoService, EmailService, toastr){

    //Validar Sessão
    SessaoService.validar();

    $scope.usuarios = [];
    $scope.usuarioLogado = {};

    //Carregar usuarios
    var carregarUsuarios = function(){
        var promise = UsuarioService.select();
        promise.then(function(response){
            $scope.usuarioLogado = response.data[0];
        }, function(error){            
            Materialize.toast('Erro de conexão com<br>o Servidor ao trazer usuario', 4000);            
        });
    };
    carregarUsuarios();

    //Init
    var init = function(){
        var promise = RegistroService.select();
        promise.then(function(response){
            $scope.usuarios = response.data;
        }, function(error){
            Materialize.toast('Erro de conexão com<br>o Servidor',2000);
        });
    };
    init();

    var enviarEmailCadastroAceito = function(usuario){
        
        var nome = usuario.email.split("@")[0];

        var promise = EmailService.enviarEmailCadastroAceito(usuario.email, nome);
        promise.then(function(response){

            console.log(response.data);


        }, function(error){
            Materialize.toast('Erro de conexão com<br>o Servidor',2000);
        });
    }

    var enviarEmailCadastroRejeitado = function(usuario){
        
        var nome = usuario.email.split("@")[0];

        var promise = EmailService.enviarEmailCadastroRejeitado(usuario.email, nome);
        promise.then(function(response){




        }, function(error){
            Materialize.toast('Erro de conexão com<br>o Servidor',2000);
        });
    }

    //Autorizar
    $scope.autorizar = function(usuario, index){        
                
        var promise = UsuarioService.insert(usuario);
        promise.then(function(response){
            $scope.usuarios.splice(index,1);
            enviarEmailCadastroAceito(usuario);            
            ativarSolicitacao(usuario);
            $('.tooltipped').tooltip('remove');
        }, function(error){            
            Materialize.toast('Erro de conexão com<br>o Servidor',2000);
        });        
    };

    $scope.rejeitar = function(usuario){
        
        var index = $scope.usuarios.indexOf(usuario);
        $scope.usuarios.splice(index, 1);
        enviarEmailCadastroRejeitado(usuario);
        cancelarSolicitacao(usuario);
        $('.tooltipped').tooltip('remove');

    }

    //Desativa solicitação do usuário e exclui o mesmo da tabela
    var cancelarSolicitacao = function(usuario){
        var promise = RegistroService.desativar(usuario);
        promise.then(function(response){

        }, function(error){
            Materialize.toast('Erro de conexão com<br>o servidor ao desativar<br>solicitação',2000);
        });
    };

    //Ativa o usuário e exclui o mesmo da tabela
    var ativarSolicitacao = function(usuario){
        var promise = RegistroService.ativar(usuario);
        promise.then(function(response){

        }, function(error){
            Materialize.toast('Erro de conexão com<br>o servidor ao desativar<br>solicitação',2000);
        });
    };
});
