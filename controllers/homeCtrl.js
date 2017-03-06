app.controller('homeCtrl',function($scope, PublicacaoService, toastr, $location, $filter){

    $scope.publicacoes = [];
    $scope.tags = [];
    $scope.progresso = false;

    //Inicializar
    var init = function(){
        $scope.progresso = true;
        var promise = PublicacaoService.selectAll();
        promise.then(function(response){
            $scope.publicacoes = response.data;
            $scope.progresso = false;
        }, function(error){
            Materialize.toast('Erro de conexão com o<br>servidor ao carregar<br>as publicações', 4000);
            $scope.progresso = false;
        });
    };

    init();

    $scope.openEmailView = function(){
        $('.tooltipped').tooltip('remove');
        $location.path('email');
    }

});
