app.controller('homeCtrl',function($scope, PublicacaoService, toastr, $location, $filter){

    $scope.publicacoes = [];
    $scope.tags = [];

    //Inicializar
    var init = function(){
        var promise = PublicacaoService.selectAll();
        promise.then(function(response){
            $scope.publicacoes = response.data;
        }, function(error){
            toastr.error('Erro de conexão com o Servidor ao carregar as publicações','Erro');
        });

    };

    init();

    $scope.openEmailView = function(){
        $('.tooltipped').tooltip('remove');
        $location.path('email');
    }

});
