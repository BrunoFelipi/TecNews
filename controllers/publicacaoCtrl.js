app.controller('publicacaoCtrl', function($scope, $rootScope, PublicacaoService, SessaoService, UsuarioService, $routeParams, $location, toastr, $route){

    $scope.publicacao = {};
    $scope.tags = [];

    var init = function(){
        var promise = PublicacaoService.selectPublicacao($routeParams.id);
        promise.then(function(response){
            if(response.data == 'false') {
                toastr.error('Publicação não existe','Erro');
                $location.path('home');
            }
            $scope.publicacao = response.data[0];
            separarTags();
        }, function(error){
            toastr.error('Erro de conexão com o servidor','Erro');
        });
    };

    init();

    var separarTags = function(){

        var aux = $scope.publicacao.tag.split(" ");

        for(var i=0; i<aux.length;i++){
            $scope.tags.push(aux[i]);
        }
    }


});
