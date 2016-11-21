app.directive('tnSidenav', function(SessaoService, $location){
    return {
        templateUrl: 'templates/tnSidenav.html',
        restrict: 'E',
        replace: true,
        scope: {
            selected: '@selected',
            usuarioLogado: '=usuarioLogado'
        },
        link: function($scope, $element, $attrs){
            $scope.sair = function(){
                SessaoService.destruir();
                $location.path('login');
                Materialize.toast('Usuário Desconectado',4000);
            }
        }
    }
});