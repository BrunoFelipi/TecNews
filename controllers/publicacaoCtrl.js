app.controller('publicacaoCtrl', function($scope, $rootScope, PublicacaoService, SessaoService, UsuarioService, $routeParams, $location, toastr, $route){

    $scope.publicacao = {};
    $scope.tags = [];
    $scope.nomeImagem = "";

    var init = function(){
        var promise = PublicacaoService.selectPublicacao($routeParams.id);
        promise.then(function(response){
            if(response.data == 'false') {                
                Materialize.toast('Publicação não existe', 4000);
                $location.path('home');
            }
            $scope.publicacao = response.data[0];

            if($scope.publicacao.tipo == "Liberação"){
                $scope.nomeImagem = "Liberacao";
            } else {
                $scope.nomeImagem = $scope.publicacao.tipo;
            }

            $scope.caminhoImagem = "resources/" + $scope.nomeImagem + ".jpg";
            separarTags();
        }, function(error){            
            Materialize.toast('Erro de conexão com o<br>servidor', 4000);
        });
    };

    init();

    var separarTags = function(){

        var aux = $scope.publicacao.tag.split(" ");

        for(var i=0; i<aux.length;i++){

            if(aux[i].length != 0){
                $scope.tags.push(aux[i]);
            }
        }
    }
});
