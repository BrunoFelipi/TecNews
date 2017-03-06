app.controller('emailsCadastradosCtrl', function ($scope, UsuarioService, SessaoService, EmailService, toastr, $route, $routeParams, $location) {

    var promise = UsuarioService.select();
    promise.then(function (response) {
        $scope.usuarioLogado = response.data[0];

        var promise = EmailService.selectAllEmailsCadastrados();
        promise.then(function (response) {
            $scope.emails = response.data;
        }, function (error) {
            Materialize.toast('Erro de conexão com o servidor', 2000);
        });
    }, function (error) {
        Materialize.toast('Erro de conexão com o servidor', 2000);
    });

    var promise = EmailService.selectQtdEmailsCadastrados();
    promise.then(function (response) {             
        $scope.totalEmailsCadastrados = response.data[0].qtdEmails;
    }, function (error) {
        Materialize.toast('Erro de conexão com o servidor', 2000);
    });

});
