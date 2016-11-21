app.controller('removerEmailCtrl', function($scope, $routeParams, EmailService, toastr, $location){

    $scope.usuario.token = $routeParams.token;
    $scope.usuario.email = '';

    $scope.removerEmail = function(){
        var promise = EmailService.selectEmail($scope.usuario.token);
        promise.then(function(response){
            $scope.usuario.email = response.data[0].email;

            var promise = EmailService.deleteEmail($scope.usuario.email);
            promise.then(function(response){
                if(response.data === 'true'){
                    Materialize.toast('Email removido com sucesso',2000);
                    $location.path('home');
                } else {
                    Materialize.toast('Erro ao remover o email',2000);
                }
            }, function(error){
                Materialize.toast('Erro de conexão com o servidor',2000);
            });

        }, function(error){
            Materialize.toast('Erro de conexão com o servidor',2000);
        });
    }

});
