app.controller('emailCtrl',function($scope, $location, $filter, toastr, EmailService){

    $scope.cadastrar = function(){

        var promise = EmailService.insert($scope.email);
        promise.then(function(response){
            if(response.data == 'true'){
                toastr.success('Email cadastrado com sucesso','Sucesso');

                var promise = EmailService.enviarEmailCadastroSucesso($scope.email);

                promise.then(function(response){
                    if(response.data == 'true'){

                        $location.path('login');
                    } else {
                        toastr.error('Erro ao enviar email','Erro');
                    }
                }, function(error){
                    Materialize.toast('Erro de conexão com<br>o Servidor',2000);
                });

            } else {
                toastr.error('Erro ao cadastrar email','Erro');
            }
        }, function(error){
            Materialize.toast('Erro de conexão com<br>o Servidor',2000);
        });

    }


});
