app.factory('SugestaoService', function($http){
    return {
        selectAll: function(){
            return $http({                
                url: 'ws/sugestao/selectAll.php'                
            });
        },
        select: function(id){
            return $http({ 
                method: 'post',               
                url: 'ws/sugestao/select.php',
                data: {id: id}                
            });
        },
        update: function(id, status){
            return $http({ 
                method: 'post',               
                url: 'ws/sugestao/update.php',
                data: {id: id, status: status}                
            });
        },
        insert: function(sugestao){
            return $http({
                method: 'post',
                url: 'ws/sugestao/insert.php',
                data: sugestao                
            });
        }
    }
});
