app.factory('SessaoService', function($http, toastr, $location){
    return {
        select: function(){
            return $http({
                method: 'post',
                url: 'ws/sessao/select.php'
            });
        },
        iniciar: function(token){
            return $http({
                method: 'post',
                url: 'ws/sessao/iniciar.php',
                data: {token: token}
            });
        },
        destruir: function(){
            return $http({
                method: 'post',
                url: 'ws/sessao/destruir.php'
            });
        },
        validar: function() {
            $http({
                method: 'post',
                url: 'ws/sessao/validar.php'
            }).then(function(response){
                if(response.data == 'false') {
                    Materialize.toast('Faça seu login', 4000);
                    $location.path('login');
                }
            }, function(error){
                Materialize.toast('Erro de conexão com<br>o Servidor', 4000);
                $location('login');
            });
        }
    };
});
