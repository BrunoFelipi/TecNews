app.controller('todosCtrl', function($scope, CucaService, toastr){

    //Barra progresso
    $scope.progress = true;

    //Iniciar carregando as cucas
    $scope.selectCucas = function(){
        $scope.cucas = {};
        $scope.progress = true;
        CucaService.selectAll().then(function(response){
            $scope.cucas = response.data;
            console.log($scope.cucas);
            $scope.progress = false;
        }, function(error){
            toastr.error('Erro de conexão com servidor', 'Erro');
            $scope.progress = false;
        });
    };
    $scope.selectCucas();

});
