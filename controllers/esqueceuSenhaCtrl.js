app.controller('esqueceuSenhaCtrl', function($scope, UsuarioService, toastr, $timeout){

    $scope.usuario.nome = '';
    $scope.usuario.email = '';
    $scope.usuario.senha = '';
    $scope.usuario.confirmarSenha = '';

    $scope.enviarEmail = function(email){

        if(!email.includes('@senior.com.br')){
            toastr.error('Email inválido','Erro');
            return;
        }

        UsuarioService.existEmail(email).then(function(response){

            var exist = response.data;

            if(exist == 'true'){

                UsuarioService.select(email).then(function(response){
                    var token = response.data[0].token;
                    UsuarioService.enviarEmailEsqueceuSenha(email,token).then(function(response){
                        toastr.success('Verifique sua caixa de email','Email enviado com sucesso');
                        document.getElementById('email').value = "";
                    }, function(error){
                        toastr.error('Erro ao conectar ao servidor','Erro');
                    });
                }, function(error){
                    toastr.error('Erro ao conectar ao servidor','Erro');
                });
            } else {
                toastr.error('Email não cadastrado','Erro');
            }
        }, function(error){
            toastr.error('Erro ao conectar ao servidor','Erro');
        });
    }
});
