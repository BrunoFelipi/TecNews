app.controller('sugestaoCtrl', function($scope, SugestaoService, UsuarioService, SessaoService, toastr, $route, $routeParams, $location) {

    $scope.usuarioLogado = {};

    var getCurrentUserId = function() {
        var promise = UsuarioService.select();
        promise.then(function(response) {
            $scope.usuarioLogado = response.data[0];
        }, function(error) {
            Materialize.toast('Erro de conexão com o servidor', 2000);
        });
    }

    getCurrentUserId();

    var promise = SugestaoService.selectAll();
    promise.then(function(response) {
        $scope.sugestoes = response.data;
    }, function(error) {
        Materialize.toast('Erro de conexão com o servidor', 2000);
    });

    $scope.openSugestao = function(id) {
        $('.tooltipped').tooltip('remove');        
        $location.path("/sugestoes/" + id);
    }

    $scope.reportar = function() {

        if ($scope.sugestao.tipo == null) {
            Materialize.toast('Selecione um tipo', 2000);
            return;
        }

        var promise = SugestaoService.insert($scope.sugestao);
        promise.then(function(response) {

            if ($scope.sugestao.tipo == 'Erro') {
                if (response.data == 'true') {
                    Materialize.toast('Erro cadastrado com sucesso', 2000);
                    $route.reload();
                } else {
                    Materialize.toast('Falha ao cadastrar Erro', 2000);
                }
            } else if ($scope.sugestao.tipo == 'Sugestão') {
                if (response.data == 'true') {
                    Materialize.toast('Sugestão cadastrada<br>com sucesso', 2000);
                    $route.reload();
                } else {
                    Materialize.toast('Falha ao cadastrar Sugestão', 2000);
                }
            }

        }, function(error) {
            Materialize.toast('Erro de conexão com o servidor', 2000);
        });
    }
});
