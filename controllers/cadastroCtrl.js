app.controller('cadastroCtrl', function($scope, UsuarioService, toastr, $location){

    $scope.usuario.nome = '';
    $scope.usuario.email = '';
    $scope.usuario.senha = '';
    $scope.usuario.confirmarSenha = '';

    $scope.cadastrar = function(usuario){

        if(usuario.senha != usuario.confirmarSenha){
            toastr.error('Senhas não conferem','Erro');
            return;
        }

        if(!usuario.email.includes('@senior.com.br')){
            toastr.error('Email inválido','Erro');
            return;
        }

        UsuarioService.existEmail(usuario.email).then(function(response){

            var emailExiste = response.data;

            if(emailExiste == 'true'){
                toastr.error('Email já cadastrado','Erro');
            } else {
                UsuarioService.cadastrar(usuario.nome, usuario.email, usuario.senha).then(function(response){
                    toastr.success('Cadastro realizado com sucesso','Sucesso');
                    $scope.usuario.nome = '';
                    $scope.usuario.email = '';
                    $scope.usuario.senha = '';
                    $scope.usuario.confirmarSenha = '';
                },function(error){
                    toastr.error('Erro ao conectar ao servidor','Erro');
                });
            }

        }, function(error){
            toastr.error('Erro ao conectar ao servidor','Erro');
        });
    };
});
