app.directive('tnNav',function(){
    return {
        templateUrl: 'templates/tnNav.html',
        restrict: 'E',
        replace: true,
        scope: {
            selected: '@selected'
        }
    }
});