app.controller('registroCtrl', function($scope, RegistroService, toastr, $location){

    $scope.enviar = function(){
        var promise = RegistroService.email($scope.email);
        promise.then(function(response){
            if(response.data == 'true'){
                promise = RegistroService.insert($scope.email);
                promise.then(function(response){
                    Materialize.toast('Solicitação enviada<br>com sucesso',4000);
                    $location.path('login');
                }, function(error){
                    Materialize.toast('Erro de conexão com Servidor',4000);
                });
            } else {
                Materialize.toast('Erro ao enviar e-mail',4000);
            }
        }, function(error){
            Materialize.toast('Erro de conexão com Servidor',4000);
        });
    };

});
