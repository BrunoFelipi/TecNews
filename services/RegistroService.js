app.factory('RegistroService', function($http){
    return {
        insert: function(email){
            return $http({
                method: 'post',
                url: 'ws/registro/insert.php',
                data: {email: email}
            });
        },
        email: function(email){
            return $http({
                method: 'post',
                url: 'ws/registro/registro.php',
                data: {email: email}
            });
        },
        select: function(){
            return $http({
                method: 'post',
                url: 'ws/registro/select.php'
            });
        },
        desativar: function(usuario){
            return $http({
                method: 'post',
                url: 'ws/registro/desativar.php',
                data: usuario
            });
        }
    };
});
