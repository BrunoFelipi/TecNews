app.controller('emailCtrl',function($scope, $location, $filter, toastr, EmailService){

    $scope.cadastrar = function(){

        var promise = EmailService.existEmail($scope.email);
        promise.then(function(response){

            if(response.data == 'false'){

                var promise = EmailService.insert($scope.email);
                promise.then(function(response){
                    if(response.data == 'true'){                        
                        Materialize.toast('Email cadastrado com sucesso', 4000);

                        var nome = $scope.email.split("@")[0];

                        var promise = EmailService.enviarEmailCadastroSucesso($scope.email, nome);

                        promise.then(function(response){
                            if(response.data == 'true'){
                                $location.path('home');
                            } else {                                
                                Materialize.toast('Erro ao enviar email', 4000);
                            }
                        }, function(error){
                            Materialize.toast('Erro de conexão com<br>o Servidor',2000);
                        });

                    } else {                        
                        Materialize.toast('Erro ao cadastrar email',2000);    
                    }
                }, function(error){
                    Materialize.toast('Erro de conexão com<br>o Servidor',2000);
                });

            } else {                
                Materialize.toast('Email já cadastrado', 4000);
            }
        }, function(error){
            Materialize.toast('Erro de conexão com<br>o Servidor',2000);
        });

/*
        var promise = EmailService.insert($scope.email);
        promise.then(function(response){
            if(response.data == 'true'){
                toastr.success('Email cadastrado com sucesso','Sucesso');

                var nome = $scope.email.split("@")[0];

                var promise = EmailService.enviarEmailCadastroSucesso($scope.email, nome);

                promise.then(function(response){
                    if(response.data == 'true'){
                        $location.path('home');
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
    */
    }
});
