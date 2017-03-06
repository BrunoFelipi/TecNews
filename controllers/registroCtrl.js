app.controller('registroCtrl', function ($scope, RegistroService, UsuarioService, toastr, $location) {

    $scope.enviar = function () {

        var promise = UsuarioService.jaCadastrado($scope.email);
        promise.then(function (response) {

            if (response.data == 'true') {
                Materialize.toast('Usuário já está cadastrado', 4000);
            } else {

                var promise = UsuarioService.cadastroPendente($scope.email);
                promise.then(function (response) {
                    if (response.data == 'true') {
                        Materialize.toast('Seu registro já foi<br>feito ao administrador.<br>Aguarde...', 4000);
                    } else {
                        var nome = $scope.email.split("@")[0];

                        var promise = RegistroService.email($scope.email, nome);
                        promise.then(function (response) {
                            if (response.data == 'true') {
                                promise = RegistroService.insert($scope.email);
                                promise.then(function (response) {
                                    Materialize.toast('Solicitação enviada<br>com sucesso', 4000);
                                    $location.path('login');
                                }, function (error) {
                                    Materialize.toast('Erro de conexão com Servidor', 4000);
                                });
                            } else {
                                Materialize.toast('Erro ao enviar e-mail', 4000);
                            }
                        }, function (error) {
                            Materialize.toast('Erro de conexão com Servidor', 4000);
                        });
                    }
                }, function (error) {
                    Materialize.toast('Erro de conexão com Servidor', 4000);
                });
            }
        }, function (error) {
            Materialize.toast('Erro de conexão com Servidor', 4000);
        });
    };
});
