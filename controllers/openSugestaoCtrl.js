app.controller('openSugestaoCtrl', function ($scope, $location, SugestaoService, UsuarioService, SessaoService, toastr, $route, $routeParams) {

    //Validar Sessão
    SessaoService.validar();

    $scope.usuarioLogado = {};
    $scope.sugestao = {};    

    var promise = UsuarioService.select();
    promise.then(function (response) {
        $scope.usuarioLogado = response.data[0];

        var promise = SugestaoService.select($routeParams.id);
        promise.then(function (response) {
            
            if(response.data.length == 0){                
                Materialize.toast('Sugestão não existe', 2000);
                $location.path('/sugestoes');
            } else {
                $scope.sugestao = response.data[0];                
            }
            
        }, function (error) {
            Materialize.toast('Erro de conexão com o servidor', 2000);
        });

    }, function (error) {
        Materialize.toast('Erro de conexão com o servidor', 2000);
    });    

    $scope.alterarStatus = function(){

        if($scope.sugestaoCorrigido == 's'){
            $scope.corrigido = 's';
        } else {
            $scope.corrigido = 'n';
        }

        var promise = SugestaoService.update($routeParams.id, $scope.corrigido);
        promise.then(function (response) {
            
            if(response.data == 'true'){
                Materialize.toast('Status alterado', 2000);
            } else {
                Materialize.toast('Erro ao alterar status', 2000);
            }

        }, function (error) {
            Materialize.toast('Erro de conexão com o servidor', 2000);
        });
        
    }

    
});
