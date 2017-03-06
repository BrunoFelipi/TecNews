app.controller('publicarCtrl', function($scope, $rootScope, PublicacaoService, SessaoService, UsuarioService, EmailService, $routeParams, $location, toastr, $route){

    //Validar Sessão
    SessaoService.validar();
    $scope.usuarioLogado = {};
    $scope.usuariosEnviarEmail = {};
    $scope.publicacao = {};
    $scope.tags = '';

    if($routeParams.tipo == 'edit'){

        $scope.botao = "Alterar";

        var init = function(){
            var promise = PublicacaoService.selectPublicacao($routeParams.id);

            $('#conteudo').trigger('autoresize');

            promise.then(function(response){
                if(response.data == 'false') {
                    Materialize.toast('Publicação não existe',2000);
                    $location.path('home');
                }
                $scope.publicacao = response.data[0];

            }, function(error){
                Materialize.toast('Erro de conexão com o servidor',2000);
            });
        };
        init();

    } else if($routeParams.tipo == 'add'){
        $scope.botao = "Publicar";
    } else {
        $location.path('home');
    }

    var getCurrentUserId = function(){
        var promise = UsuarioService.select();
        promise.then(function(response){
            $scope.usuarioLogado = response.data[0];
        }, function(error){
            Materialize.toast('Erro de conexão com o servidor',2000);
        });
    }

    getCurrentUserId();

    var enviarEmailNovaPublicacao = function(publicacao){
        $scope.usuariosEnviarEmail = [];
        
        var promise = EmailService.selectAll();

        if(publicacao.tipo === 'Liberação'){
            $scope.nomeImg = 'Liberacao_250';
        } else {
            $scope.nomeImg = publicacao.tipo + '_250';
        }

        $scope.tags = publicacao.tag.split(" ");
        $scope.tagsSeparadas = '';

        for(var i=0; i < $scope.tags.length; i++){            
            
            if(i == $scope.tags.length -1){
                $scope.tagsSeparadas = $scope.tagsSeparadas + $scope.tags[i];
            } else {
                $scope.tagsSeparadas = $scope.tagsSeparadas + ($scope.tags[i] + " - ");
            }                            
        }

        promise.then(function(response){
            $scope.usuariosEnviarEmail = response.data;
            
            for(var i=0; i < $scope.usuariosEnviarEmail.length; i++){

                var promise = EmailService.enviarEmailNovaPublicacao($scope.usuariosEnviarEmail[i].email, publicacao.tipo, publicacao.titulo, publicacao.conteudo, $scope.tagsSeparadas, $scope.nomeImg);

                promise.then(function(response){                    

                    if(response.data == 'false'){
                        Materialize.toast('Erro ao<br>enviar email',2000);
                    }

                }, function(error){
                    Materialize.toast('Erro de conexão com<br>o Servidor',2000);
                });
            }

        }, function(error){
            Materialize.toast('Erro de conexão com<br>o Servidor',2000);
        });
    }

    var enviarEmailEditarPublicacao = function(publicacao){
        $scope.usuariosEnviarEmail = [];

        var promise = EmailService.selectAll();

        if(publicacao.tipo === 'Liberação'){
            $scope.nomeImg = 'Liberacao_250';
        } else {            
            $scope.nomeImg = publicacao.tipo + '_250';
        }

        promise.then(function(response){
            $scope.usuariosEnviarEmail = response.data;

            for(var i=0; i < $scope.usuariosEnviarEmail.length; i++){

                var promise = EmailService.enviarEmailEditarPublicacao($scope.usuariosEnviarEmail[i].email, publicacao.tipo, publicacao.titulo, publicacao.conteudo, $scope.tags, $scope.nomeImg);

                promise.then(function(response){

                    if(response.data == 'false'){
                        Materialize.toast('Erro ao<br>enviar email',2000);
                    }

                }, function(error){
                    Materialize.toast('Erro de conexão com<br>o Servidor',2000);
                });
            }

        }, function(error){
            Materialize.toast('Erro de conexão com<br>o Servidor',2000);
        });
    }

    var validarTagDuplicada = function(tag){

        var aux = tag.split(" ");
        var a = '';

        for(var i=0; i < aux.length; i++){
            if($scope.tags.indexOf(aux[i]) == -1) {
                a = a + ' ' + aux[i];
                $scope.tags = a;
            }
        }
    }

    $scope.acao = function(publicacao){
        
		if(publicacao.tipo == null){
			Materialize.toast('Selecione um tipo', 2000);
			return;
		}

        validarTagDuplicada(publicacao.tag);

        if($routeParams.tipo == 'add'){

            var promise = PublicacaoService.insert($scope.usuarioLogado.id, publicacao.tipo, publicacao.titulo, publicacao.conteudo, $scope.tags, $scope.usuarioLogado.email);
            promise.then(function(response){

                if(response.data == 'true') {
                    Materialize.toast('Publicação efetuada com <br>sucesso',2000);
                    enviarEmailNovaPublicacao(publicacao);
                    $location.path('listar');
                }
            }, function(error){
                Materialize.toast('Erro de conexão com o servidor',2000);
            });

        } else if($routeParams.tipo == 'edit'){

            var promise = PublicacaoService.update($routeParams.id, $scope.usuarioLogado.id, publicacao.tipo, publicacao.titulo, publicacao.conteudo, $scope.tags, $scope.usuarioLogado.email);
            promise.then(function(response){
                if(response.data == 'true') {
                    Materialize.toast('Publicação alterada com <br>sucesso',2000);
                    enviarEmailEditarPublicacao(publicacao);
                    $location.path('listar');
                }
            }, function(error){
                Materialize.toast('Erro de conexão com o servidor',2000);
            });
        }
    }
});
