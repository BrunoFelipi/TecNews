app.controller('listarCtrl',function($scope, $rootScope, PublicacaoService, SessaoService, UsuarioService, toastr, $location){

    //Validar Sessão
    SessaoService.validar();

    $scope.publicacaoExcluir = {};
    $scope.publicacoes = [];
    $scope.usuarioLogado = {};
    $scope.show = true;
    $scope.progresso = false;

    $scope.setPublicacaoExcluir = function(publicacao){
        $scope.publicacaoExcluir = publicacao;
    }

    $scope.closeModal = function(){
        $('#modalExcluir').closeModal();
    }

    $scope.excluirPublicacao = function(){

        var promise = PublicacaoService.delete($scope.publicacaoExcluir.id);
        promise.then(function(response){
            if(response.data == 'true'){
                Materialize.toast('<html>Publicação excluida com <br>sucesso</html>',2000);
                $scope.closeModal();
                init();
            }
        }, function(error){
            Materialize.toast('Erro de conexão com o Servidor ao carregar as publicações',2000);
        });

    }

    //Inicializar
    var init = function(){
        $scope.progresso = true;
        var promise = PublicacaoService.selectAll();
        promise.then(function(response){
            $scope.publicacoes = response.data;
            usuarios();
        }, function(error){
            Materialize.toast('Erro de conexão com o Servidor ao carregar as publicações',2000);
            $scope.progresso = false;
        });
    };

    //Carregar usuarios
    var usuarios = function(){
        var promise = UsuarioService.select();
        promise.then(function(response){
            $scope.usuarioLogado = response.data[0];            
            $scope.progresso = false;
        }, function(error){
            Materialize.toast('Erro de conexão com o Servidor ao carregar as publicações',2000);
            $scope.progresso = false;
        });
    };
    init();

    //Desativar
    $scope.desativar = function(publicacao){
        $scope.show = false;
        var ativo = 0;
        if(publicacao.ativo == 1){
            ativo = 0;
        } else {
            ativo = 1;
        }
        var promise = PublicacaoService.desativar(publicacao.id, ativo);
        promise.then(function(response){
            publicacao.ativo = ativo;
            Materialize.toast('Status Alterado', 2000)
            $scope.show = true;
        }, function(error){
            Materialize.toast('Erro de conexão com o Servidor ao carregar as publicações',2000);
            $scope.show = true;
        });
    };

});
